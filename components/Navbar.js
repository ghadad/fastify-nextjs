import React from "react";
import Link from "next/link";

export default () => (
  <nav className="nav">
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/hello">
          <a>Hello</a>
        </Link>
      </li>
      <li>
        <Link href="/hello/subCategory">
          <a>Hello with subcategory</a>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </li>
    </ul>
  </nav>
);
