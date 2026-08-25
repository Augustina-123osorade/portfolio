export default function Terms() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-20 lg:py-28">
      <div>
        <span className="text-sm font-semibold uppercase tracking-widest text-[#C4633C]">
          Legal
        </span>
        <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: August 2026</p>
      </div>

      <div className="flex flex-col gap-6 text-sm leading-relaxed text-gray-600">
        <p>
          This website is a personal portfolio belonging to Augustina Osorade,
          used to showcase projects, skills, and services. By browsing this
          site, you agree to the terms below.
        </p>

        <section className="flex flex-col gap-2">
          <h2 className="text-base font-bold text-gray-900">Content ownership</h2>
          <p>
            All project write-ups, images, and code samples shown here belong
            to Augustina Osorade unless otherwise credited. Client work is
            shown with permission; some details may be generalized or omitted
            to respect confidentiality agreements.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-base font-bold text-gray-900">Use of this site</h2>
          <p>
            You're welcome to browse and share links to this site. Please
            don't copy or republish its content, code, or design without
            asking first.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-base font-bold text-gray-900">External links</h2>
          <p>
            This site links out to live project demos and third-party
            platforms (e.g. GitHub, Vercel). Those sites have their own terms
            and aren't controlled by this portfolio.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-base font-bold text-gray-900">Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a
              href="mailto:ewuramaosorade@gmail.com"
              className="font-semibold text-[#D9713F] hover:underline"
            >
              ewuramaosorade@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
