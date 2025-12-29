import yaml
from pdfminer.high_level import extract_text

text = extract_text("assets/resume/Naman_Resume.pdf")

resume = {
    "summary": text.split("Professional Summary")[1].split("Experience")[0].strip(),
}

with open("data/resume.yml", "w") as f:
    yaml.dump(resume, f)
