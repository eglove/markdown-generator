import isNil from "lodash/isNil.js";

export class MarkdownGenerator {
  private markdown = "";

  public alert(type: "CAUTION" | "IMPORTANT" | "NOTE" | "TIP" | "WARNING", text: string) {
    this.markdown += `> [!${type}]\n`;
    this.markdown += `> ${text}`;
  }

  public bold(text: string) {
    this.markdown += `**${text}**`;
  }

  public codeBlock(text: string) {
    this.markdown += `\`\`\`${text}\`\`\``;
  }

  public header(level: 1 | 2 | 3, text: string) {
    let prefix = "";
    for (let index = 0; index < level; index += 1) {
      prefix += "#";
    }

    this.markdown += `${prefix} ${text}`;
  }

  public image(text: string, url: string) {
    this.markdown = `![${text}](${url})`;
  }

  public inlineCode(text: string) {
    this.markdown += `\`${text}\``;
  }

  public italic(text: string) {
    this.markdown += `*${text}*`;
  }

  public link(text: string, url: string) {
    this.markdown += `[${text}](${url})`;
  }

  public mention(text: string) {
    this.markdown += `@${text}`;
  }

  public newLine(times?: number) {
    if (isNil(times)) {
      this.markdown += "\n";
    } else {
      for (let index = 0; index < times; index += 1) {
        this.markdown += "\n";
      }
    }
  }

  public numberedList(texts: string[], level = 0) {
    let space = "";
    for (let index = 0; index < level; index += 1) {
      space += " ";
    }

    for (const text of texts) {
      this.markdown += `${space}1. ${text}\n`;
    }
  }

  public quote(text: string) {
    this.markdown += `> ${text}`;
  }

  public render() {
    return this.markdown;
  }

  public strickthrough(text: string) {
    this.markdown += `~~${text}~~`;
  }

  public subscript(text: string) {
    this.markdown += `<sub>${text}</sub>`;
  }

  public superscript(text: string) {
    this.markdown += `<sup>${text}</sup>`;
  }

  public taskList(texts: {
    isComplete: boolean;
    label: string;
  }[]) {
    for (const text of texts) {
      this.markdown += `[${text.isComplete
        ? "X"
        : " "}] ${text.label}`;
    }
  }

  public text(text: string) {
    this.markdown += text;
  }

  public unorderedList(texts: string[], level = 0) {
    let space = "";
    for (let index = 0; index < level; index += 1) {
      space += " ";
    }

    for (const text of texts) {
      this.markdown += `${space}* ${text}\n`;
    }
  }
}
