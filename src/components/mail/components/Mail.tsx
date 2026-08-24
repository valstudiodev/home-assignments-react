import { useState, useMemo, useCallback } from "react";
import { MailProps, MailFolder } from "@/components/mail/types";
import { mailsData } from "@/components/mail/data/mailData";
import filterBy from "@/utils/array/filterBy";
import MailBody from "./mailBody/MailBody";
import { SideBar } from "@/components/mail/components/sidebar";


export default function Mail(): React.JSX.Element {
  const [search, setSearch] = useState<string>('');
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [mails, setMails] = useState<MailProps[]>(mailsData);
  const [selectedId, setSelectedId] = useState<string[]>([]);
  const [activeFolder, setActiveFolder] = useState<MailFolder>('inbox');

  const markedCountMails = mails.filter(
    (mail) => mail.isMarked,
  ).length;

  const spamCountMails = mails.filter(
    (mail) => mail.folder === 'spam',
  ).length;

  const archiveCountMails = mails.filter(
    (mail) => mail.folder === 'archive',
  ).length;

  const trashCountMails = mails.filter(
    (mail) => mail.folder === 'trash',
  ).length;

  const unreadCountMails = mails.filter(
    (mail) => mail.folder === 'unread',
  ).length;

  const filteredMails = useMemo(() => {
    return filterBy(
      mails,
      search,
      (mail) => [
        mail.from,
        mail.preview,
        mail.date,
      ],
    );
  }, [mails, search]);

  const visibleMails = useMemo(() => {
    return filteredMails.filter(
      (mail) => mail.folder === activeFolder,
    );
  }, [filteredMails, activeFolder]);

  const isAllSelected =
    visibleMails.length > 0 &&
    visibleMails.every((mail) =>
      selectedId.includes(mail.id),
    );

  function handleSelectAll(): void {
    if (isAllSelected) {
      setSelectedId((prev) =>
        prev.filter(
          (id) =>
            !visibleMails.some(
              (mail) => mail.id === id,
            ),
        ),
      );

      return;
    }

    setSelectedId((prev) => [
      ...new Set([
        ...prev,
        ...visibleMails.map((mail) => mail.id),
      ]),
    ]);
  }

  function handleToggle(id: string): void {
    setSelectedId((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  }

  const handleToggleMarked = useCallback(
    (id: string): void => {
      setMails((prevMails) =>
        prevMails.map((mail) =>
          mail.id === id
            ? {
              ...mail,
              isMarked: !mail.isMarked,
            }
            : mail,
        ),
      );
    },
    [],
  );

  const handleMove = useCallback(
    (folder: MailFolder): void => {
      if (selectedId.length === 0) {
        return;
      }

      setMails((prevMails) =>
        prevMails.map((mail) =>
          selectedId.includes(mail.id)
            ? {
              ...mail,
              folder,
            }
            : mail,
        ),
      );

      setSelectedId([]);
    },
    [selectedId],
  );

  const handleToolbarAction = useCallback(
    (actionId: string): void => {
      switch (actionId) {
        case 'spam':
          handleMove('spam');
          break;

        case 'archive':
          handleMove('archive');
          break;

        case 'trash':
          handleMove('trash');
          break;

        case 'unread':
          handleMove('unread');
          break;

        default:
          break;
      }
    },
    [handleMove],
  );

  return (
    <div className="mail flex rounded items-start gap-4 bg-gray-700 p-4">
      <SideBar
        collapsed={collapsed}
        markedCountMails={markedCountMails}
        spamCountMails={spamCountMails}
        archiveCountMails={archiveCountMails}
        trashCountMails={trashCountMails}
        unreadCountMails={unreadCountMails}
        onChangeFolder={setActiveFolder}
      />

      <MailBody
        mails={visibleMails}
        selectedId={selectedId}
        search={search}
        collapsed={collapsed}
        isAllSelected={isAllSelected}
        onSearch={setSearch}
        onToggle={handleToggle}
        onToggleMarked={handleToggleMarked}
        onToggleSideBar={() =>
          setCollapsed((prev) => !prev)
        }
        onSelectedAll={handleSelectAll}
        onAction={handleToolbarAction}
      />
    </div>
  );
}