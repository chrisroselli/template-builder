'use client'
import React from 'react'
// import TemplateBuilder from './components/TemplateBuilder'
import PageBuilder from './components/PageBuilder'
import ComponentManager from './components/ComponentManager'
import AddComponent from './components/AddComponent'
import { usePersistedState } from './hooks/usePersistedState'
import { CompRow, TemplateRow } from '@/app/types/types'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { LayoutDashboard, PanelTop, PlusCircle } from 'lucide-react'

interface Tab {
  id: string
  title: string
  content: React.ReactNode
  icon: React.ReactNode
}

function App({
  // templates,
  comps,
}: {
  templates: TemplateRow[]
  comps: CompRow[]
}) {
  const tabsData: Tab[] = [
    // {
    //   id: 'tab1',
    //   icon: <PanelsTopLeft className="w-4 h-4 mr-2" />,
    //   title: 'Template Builder',
    //   content: <TemplateBuilder templates={templates} comps={comps} />,
    // },
    {
      id: 'tab1',
      icon: <PanelTop className="w-4 h-4 mr-2" />,
      title: 'Page Builder',
      content: <PageBuilder comps={comps} />,
    },
    {
      id: 'tab2',
      icon: <LayoutDashboard className="w-4 h-4 mr-2" />,
      title: 'Component Manager',
      content: <ComponentManager comps={comps} />,
    },
    {
      id: 'tab3',
      icon: <PlusCircle className="w-4 h-4 mr-2" />,
      title: 'Add Component',
      content: <AddComponent />,
    },
  ]
  const [activeTab, setActiveTab] = usePersistedState(
    'Home tabs activeTab',
    tabsData[0].id,
  )

  return (
    <>
      <div className="bg-gray-50 rounded-xl shadow-lg">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex flex-col space-x-4"
        >
          <TabsList className="bg-white rounded-xl">
            {tabsData.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={`inline-flex items-center mx-4 py-4 text-base font-semibold ${
                  activeTab === tab.id ? 'text-primary-dark' : 'text-gray-500'
                }`}
              >
                {tab.icon}
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabsData.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-4 p-4">
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        theme="colored"
      />
    </>
  )
}

export default App
