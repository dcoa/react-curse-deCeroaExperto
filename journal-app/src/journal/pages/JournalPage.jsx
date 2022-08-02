import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
      {/* <NoteView />       */}
      <IconButton
        sx={{
          color: "white",
          backgroundColor: 'warning.main', 
          ":hover": { backgroundColor: 'warning.main', opacity: 0.9 },
          position: 'fixed',
          right: 30,
          bottom: 40
        }}
      >
        <AddOutlined sx={{fontSize: 30 }}/>
      </IconButton>
    </JournalLayout>
  )
}
