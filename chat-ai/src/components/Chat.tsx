'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";


export const Chat = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api:"/api/chat", 
    });
return (
    <Card className="w-[600px]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
          <CardContent>
            <ScrollArea className="h-[640px] space-y-4 mt-2">
                {messages.map(message => {
                    return (
                <div key={message.id} className="flex gap-3 text-slate-600 text-sm">
                {message.role === 'user' && (
                    <Avatar>
                        <AvatarFallback>MG</AvatarFallback>
                        <AvatarImage src="https://github.com/MateusGutierrez.png"/>
                    </Avatar>
                )}
                {message.role === 'assistant' && (
                    <Avatar>
                        <AvatarFallback>Assistant</AvatarFallback>
                        <AvatarImage src="https://i.pinimg.com/564x/85/6b/61/856b619107427ef73b87ee9fa3b57fc8.jpg"/>
                    </Avatar>
                )}
                <p className="leading-relaxed mr-3">
                    <span className="block font-bold text-slate-700 mt-3">
                    {message.role === 'user' ? 'User' : "AI"}
                    </span>
                    {message.content}
                </p>
                </div>
                    )
                })}
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <form action="" className="w-full flex gap-2" onSubmit={handleSubmit}>
                <Input placeholder="How can I help you ?" value={input} onChange={handleInputChange} />
                <Button type="submit">Send</Button>
            </form>
          </CardFooter>
        </CardHeader>
      </Card>
)
}