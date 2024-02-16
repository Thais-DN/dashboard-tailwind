import { ComponentProps } from "react";

export interface TextareaProps extends ComponentProps<"textarea"> {}

export function Textarea(props: TextareaProps) {
    return (
        <textarea 
            className="min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm dark:border-zinc-700 dark:text-zinc-100 dark:placeholder-zinc-400 dark:bg-zinc-800 dark:focus-border-violet-500 dark:focus-ring-violet-500/20"
            {...props}
            />
    )
}