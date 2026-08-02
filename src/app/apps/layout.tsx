import SectionsLayout from '@/components/layout/sections-layout'

export default function AppsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SectionsLayout>
      {children}
    </SectionsLayout>
  )
}
