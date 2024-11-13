import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { memo } from "react";

interface OutputTabsProps {
  beforeBordersOutput: string;
  bordersOutput: string;
  templateCSSOutput: string;
  inlineCSSOutput: string;
  indexFileOutput: string;
}

export const OutputTabs = memo(function OutputTabs({
  beforeBordersOutput,
  bordersOutput,
  templateCSSOutput,
  inlineCSSOutput,
  indexFileOutput
}: OutputTabsProps) {
  return (
    <Tabs defaultValue="before-borders" className="w-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="before-borders">Before Borders</TabsTrigger>
        <TabsTrigger value="borders">Borders</TabsTrigger>
        <TabsTrigger value="template-css">Template CSS</TabsTrigger>
        <TabsTrigger value="inline-css">Inline CSS</TabsTrigger>
        <TabsTrigger value="index-page">Index page</TabsTrigger>
      </TabsList>
      {[
        { id: "before-borders", title: "Before Borders", content: beforeBordersOutput },
        { id: "borders", title: "Borders", content: bordersOutput },
        { id: "template-css", title: "Template CSS", content: templateCSSOutput },
        { id: "inline-css", title: "Inline CSS", content: inlineCSSOutput },
        { id: "index-page", title: "Index page", content: indexFileOutput }
      ].map(tab => (
        <TabsContent key={tab.id} value={tab.id}>
          <Card>
            <CardHeader>
              <CardTitle>{tab.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                <code>{tab.content}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
});