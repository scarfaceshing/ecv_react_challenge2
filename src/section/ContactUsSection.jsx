
const Input = ({label, placeholder}) => (
    <>
        <label className="pt-3 text-[#64748B]">{label}</label>
        <input type="text" className="border border-[#CBD5E1] p-3 rounded-md" placeholder={placeholder} />
    </>
)

const InputTextarea = ({label, placeholder}) => (
    <>
        <label className="pt-3 text-[#64748B]">{label}</label>
        <textarea className="border border-[#CBD5E1] p-3 rounded-md" placeholder={placeholder} rows="6"></textarea>
    </>
)

export default function ContactUs () {
    return (
        <div className="flex flex-col my-16 bg-[#ccd5f533] py-36 xl:px-24 max-sm:items-center">
            <div className="max-sm:mb-16 max-sm:w-1/2">
                <h1 className="text-5xl font-bold text-secondary text-center max-sm:mb-8">Contact Us</h1>
                <p className="text-primary text-center">Feel free to contact us anytime. We will get back to you as soon as we can.</p>
            </div>
            <div className="flex flex-col self-center w-2/5 max-sm:w-full max-sm:px-5">
                <Input label={"Name"} placeholder={"John Doe"} />
                <Input label={"Email Address"} placeholder={"johndoe@gmail.com"} />
                <InputTextarea label={"Message"} placeholder={"Input message here"} />
                <button className="bg-secondary text-default p-4 mt-4 rounded-md max-sm:mt-16 max-sm:text-4xl max-sm:p-8">Send Message</button>
            </div>
        </div>
    )
}