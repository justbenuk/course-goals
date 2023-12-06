import { InfoBoxProps } from "../types"
export default function InfoBox(props: InfoBoxProps) {

  if (props.mode === 'hint') {
    return (
      <aside className="infobox infobox-hint">
        <p>{props.children}</p>
      </aside>
    )
  } else {
    return (
      <aside className={`infobox infobox-warning warning--${props.scale}`}>
        <h2>Warning</h2>
        <p>{props.children}</p>
      </aside>
    )
  }
}
