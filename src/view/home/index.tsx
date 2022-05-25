import { useState } from "react";
import { WLInput, WLForm } from "../../lib/components/index";

export default function () {
  return (
    <WLForm>
      <WLForm.item label="昵称" name="name">
        <WLInput></WLInput>
      </WLForm.item>
      <button>提交</button>
    </WLForm>
  );
}
