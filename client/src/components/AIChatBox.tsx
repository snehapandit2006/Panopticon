import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Loader2, Send, Sparkles, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Streamdown } from "streamdown";

export type Message = { role: "system" | "user" | "assistant"; content: string; uncertainty?: "Low" | "Medium" | "High"; responseKind?: "answer" | "refusal" | "needs-evidence"; citations?: Array<{ label: string; url: string }> };
export type AIChatBoxProps = { messages: Message[]; onSendMessage: (content: string) => void; isLoading?: boolean; placeholder?: string; className?: string; height?: string | number; emptyStateMessage?: string; suggestedPrompts?: string[] };

export function AIChatBox({ messages, onSendMessage, isLoading = false, placeholder = "Type your message...", className, height = "600px", emptyStateMessage = "Start a conversation", suggestedPrompts }: AIChatBoxProps) {
  const [input, setInput] = useState(""); const scrollRef = useRef<HTMLDivElement>(null); const visible = messages.filter((message) => message.role !== "system");
  useEffect(() => { const view = scrollRef.current?.querySelector("[data-radix-scroll-area-viewport]") as HTMLDivElement | null; view?.scrollTo({ top: view.scrollHeight, behavior: "smooth" }); }, [messages]);
  const send = (event?: React.FormEvent) => { event?.preventDefault(); const text = input.trim(); if (!text || isLoading) return; onSendMessage(text); setInput(""); };
  return <div className={cn("ai-chat", className)} style={{ height }}><div ref={scrollRef} className="chat-messages">{visible.length ? <ScrollArea className="h-full"><div className="chat-stack">{visible.map((message, index) => <div className={`chat-row ${message.role}`} key={`${message.role}-${index}`}><span className="chat-icon">{message.role === "assistant" ? <Sparkles className="size-4" /> : <User className="size-4" />}</span><div className="chat-bubble"><Streamdown>{message.content}</Streamdown>{message.uncertainty && <small className={`uncertainty ${message.responseKind ?? "answer"}`}>Uncertainty: {message.uncertainty}</small>}{message.citations?.length ? <div className="citations">{message.citations.map((citation) => <a key={citation.url} href={citation.url} target="_blank" rel="noreferrer">Source · {citation.label}</a>)}</div> : null}</div></div>)}{isLoading && <div className="chat-row assistant"><span className="chat-icon"><Sparkles className="size-4" /></span><div className="chat-bubble"><Loader2 className="size-4 spin" /></div></div>}</div></ScrollArea> : <div className="chat-empty"><Sparkles className="size-10" /><p>{emptyStateMessage}</p><div>{suggestedPrompts?.map((prompt) => <button key={prompt} onClick={() => onSendMessage(prompt)}>{prompt}</button>)}</div></div>}</div><form className="chat-input" onSubmit={send}><Textarea value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); send(); } }} placeholder={placeholder} rows={1} /><Button type="submit" size="icon" disabled={!input.trim() || isLoading}>{isLoading ? <Loader2 className="size-4 spin" /> : <Send className="size-4" />}</Button></form></div>;
}
