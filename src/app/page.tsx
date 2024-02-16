import { SettingsTabs } from "./components/SettingsTabs";
import * as Input from "./components/Input"
import * as FileInput from "./components/Form/FileInput/Index"
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import { Select } from "./components/Form/Select";
import { SelectItem } from "./components/Form/Select/SelectItem";
import { Textarea } from "./components/Form/Select/Textarea";
import { Button } from "./components/Button";

export default function Home() {
    return (
        <>
            <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">Settings</h1>
            
            <SettingsTabs />

            <div className="mt-6 flex flex-col">
                <div className="flex flex-col justify-between gap-4 pb-5 border-b border-zinc-200 dark:border-zinc-700 lg:flex-row lg:items-center">
                    <div className="space-y-1">
                        <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Personal info</h2>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">Update your photo and personal details here.</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button 
                            variant="outline"
                            type="button"
                        >
                                Cancel
                        </Button>
                        <Button 
                            variant="primary"
                            type="submit" 
                        >
                            Save
                        </Button>
                    </div>
                </div>

                <form id="settings" className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200 dark:divide-zinc-700">
                    <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form">
                        <label htmlFor="firstName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
                        <div className="flex flex-col lg:grid gap-6 lg:grid-cols-2">
                            <Input.InputRoot>
                                <Input.InputControl id="firstName" defaultValue="Thais" />
                            </Input.InputRoot>
                            <div className="flex flex-col gap-3 lg:block">
                                <label htmlFor="lastName" className="text-sm font-medium lg:sr-only text-zinc-700 dark:text-zinc-300">Last name</label>
                                <Input.InputRoot>
                                    <Input.InputControl defaultValue="Dias" />
                                </Input.InputRoot>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
                        <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Email address
                        </label>
                        <Input.InputRoot>
                            <Input.InputPrefix>
                                <Mail className="h-5 w-5 text-zinc-500"/>
                            </Input.InputPrefix>
                            <Input.InputControl id="email" type="email" defaultValue="Thais.dnunes@hotmail.com" />
                        </Input.InputRoot>
                    </div>

                    <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
                        <label htmlFor="photo" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Your photo
                            <span className="mt-0.5 text-sm font-normal text-zinc-500 block">
                                This will be displayed on your profile
                            </span>
                        </label>
                        <div>
                            <FileInput.Root className="flex flex-col lg:items-start gap-5 lg:flex-row">
                                <FileInput.ImagePreview />
                                <FileInput.Trigger />
                                <FileInput.Control />
                            </FileInput.Root>
                        </div>
                    </div>

                    <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
                        <label htmlFor="role" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Role
                        </label>
                        <Input.InputRoot>
                            <Input.InputControl id="role" defaultValue="Student" />
                        </Input.InputRoot>
                    </div>
                    
                    <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
                        <label 
                            htmlFor="contry" 
                            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                        >
                            Contry
                        </label>
                        <Select placeholder="Select a coutry">
                            <SelectItem value="br" text="Brazil" />
                            <SelectItem value="us" text="United States" />
                        </Select>

                    </div>

                    <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
                        <label htmlFor="timezone" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Time zone
                        </label>
                        <Select placeholder="Select a timezone">
                            <SelectItem value="br" text="Brasília time (UTC−03:00)" />
                            <SelectItem value="us" text="Pacific Time (UTC -8:00)" />
                        </Select>
                    </div>

                    <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
                        <label htmlFor="bio" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Bio
                            <span className="mt-0.5 text-sm font-normal text-zinc-500 block">
                                Writea short introduction.
                            </span>
                        </label>
                        <div className="space-y-3">
                            <div className="grid gap-3 grid-cols-2">
                            <Select placeholder="" defaultValue="normal">
                                <SelectItem value="normal" defaultChecked text="Normal text" />
                                <SelectItem value="md" text="Markdown" />
                            </Select>

                                <div className="flex items-center gap-1">
                                    <Button variant="ghost" type="button">
                                        <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3}/>
                                    </Button>
                                    <Button variant="ghost" type="button">
                                        <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3}/>
                                    </Button>
                                    <Button variant="ghost" type="button">
                                        <Link className="h-4 w-4 text-zinc-500" strokeWidth={3}/>
                                    </Button>
                                    <Button variant="ghost" type="button">
                                        <List className="h-4 w-4 text-zinc-500" strokeWidth={3}/>
                                    </Button>
                                    <Button variant="ghost" type="button">
                                        <ListOrdered className="h-4 w-4 text-zinc-500" strokeWidth={3}/>
                                    </Button>
                                </div>
                            </div>
                            
                            <Textarea 
                                id="bio" 
                                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
                        <label htmlFor="projects" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Portfolio projects
                            <span className="mt-0.5 text-sm font-normal text-zinc-500 block">
                                Share a few snippets of your work.
                            </span>
                        </label>
                        <FileInput.Root>
                            <FileInput.Trigger />
                            <FileInput.FileList />
                            <FileInput.Control multiple />
                        </FileInput.Root>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-5">
                        <Button 
                            variant="outline"
                            type="button"
                        >
                                Cancel
                        </Button>
                        <Button 
                            variant="primary"
                            type="submit" 
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}
