import PdfViewerComponent from './components/PdfViewerComponent';

export default function App() {
  return (
    <div className="PDF-viewer">
      <PdfViewerComponent
        document={"document.pdf"}
      />
    </div>
  );
}