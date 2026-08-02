import { useState, useMemo } from "react";
import { MailProps } from "./components/mailList/mail.types";
import { mailsData } from "@/components/mail/data/mailData";
import filterBy from "@/utils/array/filterBy";
import { MailHeader } from "./components/mailHeader/MailHeader";
import { MailBody } from "./components/mailBody/MailBody";
import { SideBar } from "./components/sidebar/SideBar";
import ToolBar from "./components/toolbar/ToolBar";

export default function Mail(): React.JSX.Element {
  const [search, setSearch] = useState<string>('');
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [mails, setMails] = useState<MailProps[]>(mailsData);
  const [selectedId, setSelectedId] = useState<string[]>([]);

  const isAllSelected = mails.length > 0 && selectedId.length === mails.length

  function handleSelectAll(): void {
    if (isAllSelected) {
      setSelectedId([])
      return
    }

    setSelectedId(mails.map(mail => mail.id))
  }

  function handleToggle(id: string): void {
    setSelectedId(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id])
  }

  function handleToggleMarked(id: string): void {
    setMails(prevMails =>
      prevMails.map(mail => mail.id === id ? {
        ...mail, isMarked: !mail.isMarked,
      } : mail
      )
    )
  }

  const markedMails = mails.filter(mail => mail.isMarked)

  const filteredMails = useMemo(() => {
    return filterBy(
      mails,
      search,
      (mail) => [
        mail.from,
        mail.preview,
        mail.date
      ]
    )
  }, [mails, search])

  return (
    <div className="mail flex w-250
    items-start gap-4 bg-gray-700 p-4">
      <div className="mail__sidebar">
        <SideBar collapsed={collapsed} />
      </div>
      <div className="mail__body grow
        flex flex-col gap-5 h-full">
        <MailHeader
          search={search}
          onSearch={setSearch}
          collapsed={collapsed}
          onToggleSideBar={() => setCollapsed(prev => !prev)} />
        <ToolBar
          isAllSelected={isAllSelected}
          onSelectAll={handleSelectAll} />
        <MailBody
          mails={filteredMails}
          selectedId={selectedId}
          onToggle={handleToggle}
          onToggleMarked={handleToggleMarked}
        />
      </div>
    </div>
  )
}