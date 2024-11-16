export const SectionContainer = ({ children }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: 20,
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
  