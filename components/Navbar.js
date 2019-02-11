import React from "react";
import Link from "next/link";

export default () => (
  <nav className="nav">
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/hello">Hello</Link>
      </li>
      <li>
        <Link href="/hello/subCategory">Hello with subcategory</Link>
      </li>
      <li>
        <Link href="/login">Login</Link>
      </li>
    </ul>
  </nav>
);
