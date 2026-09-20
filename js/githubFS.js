const GithubFS = {
    icons: {
        folderClosed: `<svg class="tree-icon" viewBox="0 0 24 24" fill="#ffa726"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>`,
        folderOpen: `<svg class="tree-icon" viewBox="0 0 24 24" fill="#ffa726"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm0 12H4V8h16v10z"/></svg>`,
        code: `<svg class="tree-icon" viewBox="0 0 24 24" fill="#888"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>`,
        image: `<svg class="tree-icon" viewBox="0 0 24 24" fill="#ff8c42"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>`,
        markdown: `<svg class="tree-icon" viewBox="0 0 24 24" fill="#42a5f5"><path d="M20.5 3h-17C2.12 3 1.5 3.62 1.5 4.5v15c0 .88.62 1.5 1.5 1.5h17c.88 0 1.5-.62 1.5-1.5v-15c0-.88-.62-1.5-1.5-1.5zM3 17.5V6.5h2.5l2 2.5 2-2.5H12v11H9.5v-6.5l-2 2.5-2-2.5v6.5H3zm15 0l-3-4h2V6.5h2v7h2l-3 4z"/></svg>`,
        lua: `<svg class="tree-icon" viewBox="0 0 24 24" fill="#000080"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm1-13a2.5 2.5 0 1 0 2.5 2.5A2.5 2.5 0 0 0 13 7z"/></svg>`,
        c: `<svg class="tree-icon" viewBox="0 0 24 24" fill="#a8b9cc"><path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm2.5 13.5a4 4 0 1 1 0-7 3.9 3.9 0 0 1 2.5.9l-1.2 1.4a2.2 2.2 0 1 0 0 2.4l1.2 1.4a3.9 3.9 0 0 1-2.5.9z"/></svg>`,
        cpp: `<svg class="tree-icon" viewBox="0 0 24 24" fill="#00599c"><path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm-1 13.5a4 4 0 1 1 0-7 3.9 3.9 0 0 1 2.5.9l-1.2 1.4a2.2 2.2 0 1 0 0 2.4l1.2 1.4a3.9 3.9 0 0 1-2.5.9zm8-4h-1v-1h-1v1h-1v1h1v1h1v-1h1zm3 0h-1v-1h-1v1h-1v1h1v1h1v-1h1z"/></svg>`,
        python: `<svg class="tree-icon" viewBox="0 0 24 24" fill="#3776ab"><path d="M11.89 2c-3.26 0-3.08 1.41-3.08 1.41l.01 1.46h3.13v.44H7.55S5.33 5.06 5.33 8.35v3.42h1.36V9.45s-.04-1.63 1.63-1.63h5.27s1.56.02 1.56-1.52V4.87S15.43 2 11.89 2zm-1.69 1a.75.75 0 1 1 0 1.501.75.75 0 0 1 0-1.501zm1.91 19c3.26 0 3.08-1.41 3.08-1.41l-.01-1.46h-3.13v-.44h4.4s2.22.25 2.22-3.04v-3.42h-1.36v2.32s.04 1.63-1.63 1.63h-5.27s-1.56-.02-1.56 1.52v1.43S8.57 22 12.11 22zm1.69-1a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"/></svg>`,
        txt: `<svg class="tree-icon" viewBox="0 0 24 24" fill="#757575"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>`,
        json: `<svg class="tree-icon" viewBox="0 0 24 24" fill="#fbc02d"><path d="M5 3c-1.11 0-2 .89-2 2v4c0 1.11-.89 2-2 2 1.11 0 2 .89 2 2v4c0 1.11.89 2 2 2h2v-2H5v-3c0-1.11-.89-2-2-2 1.11 0 2-.89 2-2V5h2V3H5zm14 0h-2v2h2v3c0 1.11.89 2 2 2-1.11 0-2 .89-2 2v3h-2v2h2c1.11 0 2-.89 2-2v-4c0-1.11.89-2 2-2-1.11 0-2-.89-2-2V5c0-1.11-.89-2-2-2z"/></svg>`
    },

    getIcon(isDir, isOpen, fileName = '') {
        if (isDir) return isOpen ? this.icons.folderOpen : this.icons.folderClosed;
        
        const ext = fileName.split('.').pop().toLowerCase();
        if (['lua', 'luau'].includes(ext)) return this.icons.lua;
        if (ext === 'c') return this.icons.c;
        if (['cpp', 'cc', 'cxx', 'h', 'hpp'].includes(ext)) return this.icons.cpp;
        if (['py', 'pyw'].includes(ext)) return this.icons.python;
        if (ext === 'txt') return this.icons.txt;
        if (ext === 'json') return this.icons.json;
        if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'].includes(ext)) return this.icons.image;
        if (ext === 'md') return this.icons.markdown;
        
        return this.icons.code;
    },

    async loadRepo(owner, repoName, branch, btnElement) {
        if (typeof sfx !== 'undefined') sfx.playClick();
        btnElement.textContent = 'Loading tree...';
        btnElement.disabled = true;
        const container = btnElement.nextElementSibling;

        try {
            const res = await fetch(`https://api.github.com/repos/${owner}/${repoName}/git/trees/${branch}?recursive=1`);
            if (!res.ok) throw new Error();
            const data = await res.json();
            
            btnElement.style.display = 'none';
            container.style.display = 'block';
            
            const tree = this.buildTree(data.tree);
            this.renderNodes(tree, container, owner, repoName, branch);
        } catch {
            btnElement.textContent = 'Failed to load';
            btnElement.disabled = false;
        }
    },

    buildTree(paths) {
        const root = {};
        paths.forEach(item => {
            const parts = item.path.split('/');
            let current = root;
            parts.forEach((part, i) => {
                if (!current[part]) {
                    current[part] = { 
                        name: part, 
                        path: item.path, 
                        type: (i === parts.length - 1 && item.type === 'blob') ? 'file' : 'dir', 
                        children: {} 
                    };
                }
                current = current[part].children;
            });
        });
        return root;
    },

    renderNodes(nodeObj, container, owner, repoName, branch, level = 0) {
        Object.values(nodeObj).sort((a, b) => (b.type === 'dir') - (a.type === 'dir')).forEach(node => {
            const isDir = node.type === 'dir';
            const row = document.createElement('div');
            row.className = `file-item ${isDir ? 'folder-item' : 'file-clickable'}`;
            row.style.paddingLeft = `${level * 12}px`;
            row.innerHTML = `<span class="icon-container">${this.getIcon(isDir, false, node.name)}</span><span>${node.name}</span>`;
            
            row.addEventListener('mouseenter', () => typeof sfx !== 'undefined' && sfx.playHover());

            const wrapper = document.createElement('div');
            wrapper.appendChild(row);
            container.appendChild(wrapper);

            if (isDir) {
                const childrenDiv = document.createElement('div');
                childrenDiv.className = 'folder-children collapsed';
                wrapper.appendChild(childrenDiv);
                this.renderNodes(node.children, childrenDiv, owner, repoName, branch, level + 1);

                row.onclick = (e) => {
                    e.stopPropagation();
                    if (typeof sfx !== 'undefined') sfx.playClick();
                    const isCollapsed = childrenDiv.classList.toggle('collapsed');
                    row.querySelector('.icon-container').innerHTML = this.getIcon(true, !isCollapsed, node.name);
                };
            } else {
                row.onclick = (e) => {
                    e.stopPropagation();
                    if (typeof sfx !== 'undefined') sfx.playClick();
                    openCodeModal(owner, repoName, branch, node.path);
                };
            }
        });
    }
};