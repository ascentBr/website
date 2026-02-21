import type { ReactNode } from "react";
import styles from "./preview-layout.module.scss";
import FloatingPreviewBar from "./components/FloatingPreviewBar/Index";


interface PreviewLayoutProps {
  children: ReactNode;
}

export default function PreviewLayout({ children }: PreviewLayoutProps) {
  return (
    <div className={styles.previewWrapper}>
      {children}
      <FloatingPreviewBar />
    </div>
  );
}