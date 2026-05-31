"use client";

type InstagramLinkProps = {
  username: string;
  className?: string;
};

function isMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

function isInAppBrowser() {
  return /TikTok|Bytedance|musical_ly|Instagram|FBAN|FBAV|Twitter|Line\//i.test(
    navigator.userAgent,
  );
}

export function InstagramLink({ username, className }: InstagramLinkProps) {
  const webUrl = `https://instagram.com/${username}`;
  const appUrl = `instagram://user?username=${username}`;

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!isMobile() || !isInAppBrowser()) return;

    event.preventDefault();

    // Try opening the Instagram app first (works from TikTok's in-app browser)
    window.location.href = appUrl;

    // Fall back to the web profile if the app isn't installed
    window.setTimeout(() => {
      window.location.href = webUrl;
    }, 1500);
  }

  return (
    <a
      href={webUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      Instagram
    </a>
  );
}
