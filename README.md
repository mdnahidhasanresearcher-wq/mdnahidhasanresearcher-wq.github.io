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
2. Find the section you want to change (each one starts with a comment such as `<!-- ===== EDUCATION ===== -->`).
3. Change the text between the tags. Keep the `<` `>` tags themselves as they are.
4. Each section has a comment starting with `HOW TO ADD`. It shows which block to copy when you need more entries, for example another degree or publication.
5. Click **Commit changes**. The live site updates within about 1–2 minutes.

### Add your CV
Upload your PDF into the `files` folder with exactly this name: `MD_Nahid_Hasan_CV.pdf`.

Use a **public version** of your CV. Remove your home address, phone number, WeChat ID and your referees' email addresses first. Write "Referees available on request" instead.

The CV section, the "CV" menu button and the "Download CV" button are **hidden automatically until this file exists**. Upload the PDF and they appear by themselves (refresh the page after 1–2 minutes).

### Not on the website yet (add when ready)
- Google Scholar and ResearchGate links. Copy one of the link blocks in the Contact section of `index.html`.
- Your photo (optional).
- Full details of the collaborative green hydrogen manuscript. The site shows only a general description until your supervisor agrees.

### Add your photo
Upload a square photo to `assets/img/profile.jpg`. Then, in `index.html`, find the comment `TO ADD YOUR PHOTO` and follow its instructions.

### Add your links (LinkedIn, ORCID, Google Scholar, email…)
In the **Contact** section of `index.html`, copy one whole `<li>…</li>` link block, then change:
- the address in `href="…"` (for email, use `href="mailto:you@example.com"`)
- the name inside `<strong>…</strong>`
- the short label inside `<small>…</small>`.

## Privacy reminders
- Anything in this repository is **public**, even files you don't link to.
- Don't upload confidential research, unpublished data, or private documents.
- Remove your home address, phone number, WeChat ID, passport number and date of birth from the public CV.
- Don't publish other people's contact details (for example, referees' emails) without their permission.
- Check with your supervisors before adding new details or results from joint, unpublished work.

## How to turn on the website (one time)
1. On GitHub, go to the repository → **Settings** → **Pages**.
2. Under **Build and deployment**, set *Source* to **Deploy from a branch**.
3. Choose branch **main** and folder **/ (root)**, then click **Save**. (GitHub Pages is already switched on for this repository, so check that these settings are correct.)
4. Wait 1–2 minutes and visit https://mdnahidhasanresearcher-wq.github.io/

## Preview on your own computer (optional)
Double-click `index.html` to open it in your browser. (The CV section always stays hidden in this mode.)
For a more accurate preview, run this in the folder, then open http://localhost:8000:

```bash
python3 -m http.server 8000
```
