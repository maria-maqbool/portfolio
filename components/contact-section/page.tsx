import Link from "next/link"

const ContactSection = () => {
    return (
        <>
            {/* Contact Section */}
            <section id="contact" className="mt-32 md:mt-48 max-w-2xl mx-auto text-center">
                <div className="mb-8">
                    <p className="font-mono text-emerald-400 text-lg mb-4">04. What&apos;s Next?</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-200 mb-8">Get In Touch</h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto">
                        I&apos;m currently looking for new opportunities, my inbox is always open.  I am eager to contribute my skills to a dynamic team and grow as a developer.  Whether you
                        have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>
                </div>
                <div className="mb-32">
                    <Link
                        href="mailto:mariamaqbool35@gmail.com"
                        className="inline-block font-mono text-emerald-400 border border-emerald-400 px-8 py-4 rounded hover:bg-emerald-400/10 transition-colors"
                    >
                        Say Hello
                    </Link>
                </div>
            </section>
        </>
    );
}

export default ContactSection;