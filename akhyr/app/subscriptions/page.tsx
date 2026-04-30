import { ArrowUpRightIcon } from "lucide-react"
import Link from "next/link"

const Subscriptions = () => {
    return (
        <div id="subscriptions" className="bg-primary">
            <div className="flex flex-col w-full">
                <h2 className="font-sans text-5xl font-semibold mb-6">
                    My Story
                </h2>

                <div className="flex flex-col gap-4 text-md bg-primary/5 backdrop-blur-xl w-fit p-8 border border-white/15 rounded-xl">
                    <ul className="flex flex-col gap-2 text-md bg-primary/5 backdrop-blur-xl w-fit p-8 border border-white/15 rounded-xl">
                    <li>-- I'm Ahmed from Sudan.</li>
                    <li>-- War stopped my education.</li>
                    <li>-- Today, I have almost nothing.</li>
                    <li>-- But I have a goal: to become a software engineer.</li>
                    </ul>
                    {/*  */}
                    <Link className="flex items-center justify-start gap-4 w-fit py-2 px-4 hover:bg-primary text-white rounded-xl hover:bg-primary/75 transition-all duration-300 cursor-pointer" href="/story">
                    <button className="" id="cta-button">
                        Read Full Story
                    </button>
                    <div className="p-1 bg-primary rounded-full">
                        <ArrowUpRightIcon size="18" className="" />
                    </div>
                    
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Subscriptions;