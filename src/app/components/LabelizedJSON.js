export const LabelizedJSON = ({ label, value }) => (
    <div
      style={{
        overflow: "scroll",
        textAlign: "start",
        background: "#F8F9E9",
        borderRadius: 4,
        padding: 10,
        marginTop: 10,
      }}
    >
      <b>{label}:</b>
      <pre>
        {value
          ? JSON.stringify(
              value,
              value instanceof Error ? Object.getOwnPropertyNames(value) : null,
              2
            )
          : "undefined"}
        {value instanceof Error ? "\n\n" + value.stack : ""}
      </pre>
    </div>
  );
  