export async function downloadResumeFile(e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
  }
  try {
    const response = await fetch("/api/download-resume");
    if (!response.ok) {
      throw new Error("Failed to fetch resume");
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Anshul_Singh_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => window.URL.revokeObjectURL(url), 2000);
  } catch (err) {
    // Safe fallback to direct endpoint download
    window.location.href = "/api/download-resume";
  }
}
