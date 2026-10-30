# mdnahidhasanresearcher-wq.github.io

Personal academic and professional website of MD Nahid Hasan: education, research interests, projects, publications, teaching, skills, CV, and professional links.

Live address (after publishing): **https://mdnahidhasanresearcher-wq.github.io/**

---

## What is in this folder?

| File / folder | What it is |
|---|---|
| `index.html` | **The website content.** Almost all your editing happens here. |
| `assets/css/style.css` | The design: colours, fonts, spacing. |
| `assets/js/main.js` | Small helpers: mobile menu, active menu highlight, CV-button check. |
| `assets/img/` | Images (favicon; put your photo here as `profile.jpg`). |
| `files/` | Put your CV PDF here as `MD_Nahid_Hasan_CV.pdf`. |
| `404.html` | The page shown if someone opens a wrong link. |
| `.nojekyll` | Tells GitHub Pages to serve the files exactly as they are. |

## How to fill in your information

1. Open `index.html` (on GitHub, open the file and click the pencil ✏️ icon).
2. Search for `[TO ADD` (Ctrl+F / Cmd+F). Each one is a gap to fill.
3. Replace the placeholder text with your real information. On the live site, `[TO ADD]` text is highlighted in yellow so you can spot what is still missing.
4. Each section has a comment starting with `HOW TO ADD`. It shows which block to copy when you need more entries, for example another degree or publication.
5. Click **Commit changes**. The live site updates within about 1–2 minutes.

### Add your CV
Upload your PDF into the `files` folder with exactly this name: `MD_Nahid_Hasan_CV.pdf`.
The Download CV button then works automatically.

Use a **public version** of your CV. Remove your home address, phone number, WeChat ID and your referees' email addresses first. Write "Referees available on request" instead.

### What is still marked [TO ADD]
- Google Scholar link (create a profile at scholar.google.com once you have a publication)
- ResearchGate link
- Your photo (optional)

### Add your photo
Upload a square photo to `assets/img/profile.jpg`. Then, in `index.html`, find the comment `TO ADD YOUR PHOTO` and follow its instructions.

### Add your links (LinkedIn, ORCID, Google Scholar, email…)
In the **Contact** section of `index.html`, for each link:
- change `href="#"` to your real address (for email, use `href="mailto:you@example.com"`)
- delete `is-placeholder` from the `class="…"`
- replace `[TO ADD]` with a short label, such as your ORCID number.

## Privacy reminders
- Anything in this repository is **public**, even files you don't link to.
- Don't upload confidential research, unpublished data, or private documents.
- Remove your home address, phone number, WeChat ID, passport number and date of birth from the public CV.
- Don't publish other people's contact details (for example, referees' emails) without their permission.
- Check with your supervisors before adding new details or results from joint, unpublished work.

## How to turn on the website (one time)
1. On GitHub, go to the repository → **Settings** → **Pages**.
2. Under **Build and deployment**, set *Source* to **Deploy from a branch**.
3. Choose branch **main** and folder **/ (root)**, then click **Save**.
4. Wait 1–2 minutes and visit https://mdnahidhasanresearcher-wq.github.io/

## Preview on your own computer (optional)
Double-click `index.html` to open it in your browser.
For a more accurate preview, run this in the folder, then open http://localhost:8000:

```bash
python3 -m http.server 8000
```
