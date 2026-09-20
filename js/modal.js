async function openCodeModal(owner, repo, branch, path) {
    const modal = document.getElementById('code-modal');
    const modalBody = document.getElementById('modal-body');
    document.getElementById('modal-filename').textContent = path;
    
    modal.classList.add('active');

    const ext = path.split('.').pop().toLowerCase();
    const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}`;

    if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'].includes(ext)) {
        modalBody.innerHTML = `<img src="${rawUrl}" alt="${path}" class="modal-media-preview" />`;
        return;
    }

    modalBody.innerHTML = `<p style="color:#aaa;">Loading content...</p>`;

    try {
        const res = await fetch(rawUrl);
        if (!res.ok) throw new Error();
        const text = await res.text();

        if (ext === 'md') {
            modalBody.innerHTML = `<div class="markdown-render">${marked.parse(text)}</div>`;
            return;
        }

        modalBody.innerHTML = `<pre><code id="modal-code"></code></pre>`;
        const codeEl = document.getElementById('modal-code');
        codeEl.textContent = text;
        
        let lang = 'clike';
        if (['lua', 'luau'].includes(ext)) lang = 'lua';
        else if (ext === 'c') lang = 'c';
        else if (['cpp', 'cc', 'cxx', 'h', 'hpp'].includes(ext)) lang = 'cpp';
        else if (['py', 'pyw'].includes(ext)) lang = 'python';
        else if (ext === 'json') lang = 'json';

        codeEl.className = `language-${lang}`;
        Prism.highlightElement(codeEl);

    } catch {
        modalBody.innerHTML = `<p style="color:#ff5555;">Failed to load file.</p>`;
    }
}

function closeCodeModal() {
    if (typeof sfx !== 'undefined') sfx.playClick();
    document.getElementById('code-modal').classList.remove('active');
}