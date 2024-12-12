interface CodeViewProps {
  code: string;
}

export default function TemplateView({ code }: CodeViewProps) {
  return (
    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
      <code>{code}</code>
    </pre>
  );
}