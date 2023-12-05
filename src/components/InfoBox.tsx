import { InfoBoxProps } from "../types"
export default function InfoBox({ children, mode }: InfoBoxProps) {

  if (mode === 'hint') {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    )
  } else {
    return (
      <aside className="infobox infobox-warning warning--low">
        <h2>Warning</h2>
        <p>{children}</p>
      </aside>
    )
  }
}
