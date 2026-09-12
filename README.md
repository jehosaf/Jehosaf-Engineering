# JEHOSAF Portfolio

A simple recruiter-focused mechanical engineering portfolio built for GitHub Pages.

## Before publishing

1. Replace the image placeholders with your own project images.
2. Add your actual resume as `resume.pdf`.
3. Replace the email address in `index.html`.
4. Replace LinkedIn and GitHub `href="#"` links.
5. Add direct verification links for CSWP, CSWA, and Six Sigma.
6. Review project wording and remove anything you do not want public.

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, `script.js`, and your `resume.pdf`.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your main branch and `/ (root)`.
6. Save. GitHub will provide your public site URL.

## Recommended image filenames

- `images/tshirt-launcher.jpg`
- `images/office-build.jpg`
- `images/3d-printing.jpg`
- `images/fabrication-repair.jpg`

You can replace each `.image-placeholder` block in `index.html` with:

```html
<img class="project-image" src="images/tshirt-launcher.jpg" alt="TXST T-Shirt Launcher">
```

Then add this to `styles.css`:

```css
.project-image {
  width: 100%;
  height: 100%;
  min-height: 240px;
  object-fit: cover;
  display: block;
}
```
