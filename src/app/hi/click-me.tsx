"use client";

import { Button } from "@/components/ui/button";

export default function ClickMe() {
    return <Button onClick={() => alert("Hello!")}>Click me!</Button>;
}
