try {
    document.querySelectorAll("[target='_blank']").forEach(e => {
        e.setAttribute("rel","noopener noreferrer nofollow")
    });
} catch (e) {}