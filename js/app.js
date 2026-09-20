const SOCIAL_ICONS = {
    github: `<svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
    roblox: `<svg viewBox="0 0 24 24"><path d="M5.16 0L0 18.84 18.84 24 24 5.16 5.16 0zm9.21 13.91l-4.32-1.16 1.16-4.32 4.32 1.16-1.16 4.32z"/></svg>`,
    telegram: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>`,
    discord: `<svg viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`
};

class AxeMApp {
    init() {
        this.bindGlobalUserInteraction();
        this.bindTabs();
        this.bindEasterEgg();
        this.renderAll();
    }

    bindGlobalUserInteraction() {
        const enableAudio = () => {
            if (typeof sfx !== 'undefined') sfx.init();
            window.removeEventListener('click', enableAudio);
            window.removeEventListener('keydown', enableAudio);
        };
        window.addEventListener('click', enableAudio);
        window.addEventListener('keydown', enableAudio);
    }

    bindEasterEgg() {
        const logo = document.getElementById('easter-logo');
        if (!logo) return;

        logo.addEventListener('click', (e) => {
            e.preventDefault();
            if (typeof sfx !== 'undefined') sfx.playClick();

            logo.classList.remove('logo-bounce');
            void logo.offsetWidth;
            logo.classList.add('logo-bounce');

            const rect = logo.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const colors = ['#ff8c42', '#8c52ff', '#ffc107', '#ff5252', '#4caf50'];

            for (let i = 0; i < 25; i++) {
                const particle = document.createElement('div');
                particle.className = 'axem-particle';
                
                const size = Math.random() * 8 + 4;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                particle.style.left = `${centerX}px`;
                particle.style.top = `${centerY}px`;

                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 80 + 40;
                const dx = Math.cos(angle) * distance;
                const dy = Math.sin(angle) * distance;

                particle.style.setProperty('--dx', `${dx}px`);
                particle.style.setProperty('--dy', `${dy}px`);

                document.body.appendChild(particle);
                setTimeout(() => particle.remove(), 800);
            }
        });
    }

    bindTabs() {
        document.querySelectorAll('.nav-item').forEach(btn => {
            btn.addEventListener('mouseenter', () => typeof sfx !== 'undefined' && sfx.playHover());
            
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (typeof sfx !== 'undefined') sfx.playClick();

                const targetId = btn.getAttribute('data-tab');
                document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
                
                setTimeout(() => {
                    document.getElementById(targetId).classList.add('active');
                }, 50);
            });
        });
    }

    attachSounds() {
        if (typeof sfx === 'undefined') return;
        document.querySelectorAll('.card, a').forEach(el => {
            el.addEventListener('mouseenter', () => sfx.playHover());
        });
        document.querySelectorAll('a').forEach(el => {
            el.addEventListener('click', () => sfx.playClick());
        });
    }

    renderAll() {
        if (window.AXEM_INFO) {
            document.getElementById('info-title').textContent = window.AXEM_INFO.title || 'AxeM';
            document.getElementById('info-subtitle').textContent = window.AXEM_INFO.subtitle || '';
        }

        if (window.AXEM_CREATORS) {
            document.getElementById('creators-container').innerHTML = window.AXEM_CREATORS.map((c, index) => `
                <div class="card" style="animation-delay: ${index * 0.07}s">
                    <img src="${c.avatar}" class="creator-avatar" alt="${c.name}">
                    <h3>${c.name}</h3>
                    <p class="role-text">${c.role}</p>
                    <div class="creator-links">
                        ${Object.entries(c.links || {})
                            .filter(([_, url]) => url)
                            .map(([platform, url]) => {
                                const key = platform.toLowerCase();
                                const iconSvg = SOCIAL_ICONS[key] || `<span style="font-size:12px">${platform}</span>`;
                                return `<a href="${url}" target="_blank" class="social-btn" title="${platform}">${iconSvg}</a>`;
                            })
                            .join('')}
                    </div>
                </div>
            `).join('');

            this.renderGithubFromCreators(window.AXEM_CREATORS);
        }

        if (window.AXEM_ROBLOX) {
            document.getElementById('roblox-container').innerHTML = window.AXEM_ROBLOX.map((p, index) => `
                <div class="card card-left" style="animation-delay: ${index * 0.07}s">
                    <h3 style="margin-bottom: 8px;">${p.title}</h3>
                    <p class="project-desc">${p.description}</p>
                    <a href="${p.url}" target="_blank" style="color:#ff8c42; text-decoration:none; font-weight:bold; font-size:14px;">Play on Roblox &rarr;</a>
                </div>
            `).join('');
        }

        if (window.AXEM_TESTS) {
            document.getElementById('tests-container').innerHTML = window.AXEM_TESTS.map((t, index) => `
                <div class="card card-left" style="animation-delay: ${index * 0.07}s">
                    <span class="test-status">${t.status}</span>
                    <h3 style="margin-bottom: 8px;">${t.title}</h3>
                    <p class="project-desc" style="margin-bottom: 0;">${t.content}</p>
                </div>
            `).join('');
        }

        setTimeout(() => this.attachSounds(), 100);
    }

    extractGithubUser(url) {
        if (!url) return null;
        try { return url.replace(/\/$/, "").split('/').pop(); } catch { return null; }
    }

    async renderGithubFromCreators(creators) {
        const container = document.getElementById('github-projects');
        const githubUsers = creators.map(c => this.extractGithubUser(c.links?.github)).filter(u => u);
        const IGNORED_PROJECTS = ["Fonihm", "AxeM-Website"];

        if (githubUsers.length === 0) { 
            container.innerHTML = '<p>No GitHub links found.</p>';
            return;
        }

        const repoPromises = githubUsers.map(user => 
            fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=15`).then(res => res.json()).catch(() => [])
        );
        
        const allUsersRepos = await Promise.all(repoPromises);
        let combinedHtml = '';
        let globalCardIndex = 0;

        allUsersRepos.forEach((repos, index) => {
            const ownerName = githubUsers[index];
            const validRepos = Array.isArray(repos) ? repos.filter(r => !r.fork && !IGNORED_PROJECTS.includes(r.name)) : [];
            
            combinedHtml += validRepos.map(repo => {
                globalCardIndex++;
                const branch = repo.default_branch || 'main';
                const repoDesc = repo.description || 'Source code and files for this project.';

                return `
                <div class="card card-left" style="animation-delay: ${globalCardIndex * 0.07}s">
                    <h3 class="project-title" style="margin-bottom: 4px;">${repo.name.replace(/[-_]/g, ' ')}</h3>
                    <p class="role-text" style="font-size: 12px; margin-bottom: 8px;">Author: ${ownerName}</p>
                    <p class="project-desc">${repoDesc}</p>
                    
                    <button class="load-tree-btn" onclick="GithubFS.loadRepo('${ownerName}', '${repo.name}', '${branch}', this)">Show Files 📁</button>
                    <div class="file-tree" style="display: none;"></div>

                    <div style="margin-top:10px;">
                        <a href="${repo.html_url}" target="_blank" style="color:#ff8c42; text-decoration:none; font-weight:bold; font-size:13px;">View Code &rarr;</a>
                    </div>
                </div>
                `;
            }).join('');
        });

        container.innerHTML = combinedHtml || '<p>No public projects found.</p>';
        this.attachSounds();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new AxeMApp();
    app.init();
});