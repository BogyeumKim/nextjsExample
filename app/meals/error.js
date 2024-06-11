"use client";
function Error({ error }) {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to fetch meal data. Please try agian.</p>
    </main>
  );
}

export default Error;
