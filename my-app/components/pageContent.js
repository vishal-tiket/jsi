import Link from "next/link";

export const PageContent = ({ title, urls }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: "20px",
      }}
    >
      <h3>{title}</h3>
      {urls?.map((url, idx) => {
        return (
          <Link href={url} key={idx}>
            <span style={{ color: "blue" }}>{url}</span>
          </Link>
        );
      })}
    </div>
  );
};
