import { expect, fixture } from "@open-wc/testing";

import { FieldGroup } from "../index";

describe("FieldGroup", () => {
  describe("visible", () => {
    it("should be display inline-table when not assigned in constructor", async () => {
      const container = new FieldGroup({ content: "FieldGroup's content" });

      const el = await fixture(container);
      expect(el.hasAttribute("hidden")).to.equal(false);

      const computedStyle = window.getComputedStyle(el);
      expect(computedStyle.display).to.equal("inline-table");
    });

    it("should be display none when not assigned in constructor", async () => {
      const container = new FieldGroup({
        content: "FieldGroup's content",
        visible: false,
      });

      const el = await fixture(container);
      expect(el.hasAttribute("hidden")).to.equal(true);

      const computedStyle = window.getComputedStyle(el);
      expect(computedStyle.display).to.equal("none");
    });

    it("should be display inline-table when changed to true by setter", async () => {
      const container = new FieldGroup({
        content: "FieldGroup's content",
        visible: false,
      });
      container.visible = true;

      const el = await fixture(container);
      expect(el.hasAttribute("hidden")).to.equal(false);

      const computedStyle = window.getComputedStyle(el);
      expect(computedStyle.display).to.equal("inline-table");
    });

    it("should be display none when changed to false by setter", async () => {
      const container = new FieldGroup({
        content: "FieldGroup's content",
        visible: true,
      });
      container.visible = false;

      const el = await fixture(container);
      expect(el.hasAttribute("hidden")).to.equal(true);

      const computedStyle = window.getComputedStyle(el);
      expect(computedStyle.display).to.equal("none");
    });
  });
});
