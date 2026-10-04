from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table

out = Path(r"C:\Users\mylim\6xarchive\public\resume\ming-yang-resume.pdf")
out.parent.mkdir(parents=True, exist_ok=True)

INK, PAPER, BRASS, MUTED, RULE = (
    colors.HexColor("#1B1A17"),
    colors.HexColor("#F5F1E8"),
    colors.HexColor("#A8874B"),
    colors.HexColor("#625D54"),
    colors.HexColor("#D6CCBB"),
)
doc = SimpleDocTemplate(
    str(out), pagesize=A4, leftMargin=18 * mm, rightMargin=18 * mm,
    topMargin=16 * mm, bottomMargin=14 * mm, title="Ming Yang - Resume", author="Ming Yang",
)
styles = getSampleStyleSheet()
name = ParagraphStyle("name", parent=styles["Normal"], fontName="Times-Bold", fontSize=26, leading=27, textColor=INK)
role = ParagraphStyle("role", parent=styles["Normal"], fontName="Helvetica", fontSize=9, leading=13, textColor=MUTED)
contact = ParagraphStyle("contact", parent=styles["Normal"], fontName="Helvetica", fontSize=7.5, leading=10, textColor=MUTED)
label = ParagraphStyle("label", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=7, leading=9, textColor=BRASS, spaceBefore=8, spaceAfter=4)
body = ParagraphStyle("body", parent=styles["Normal"], fontName="Helvetica", fontSize=8.15, leading=12, textColor=INK)
small = ParagraphStyle("small", parent=body, fontSize=7.65, leading=10.8, textColor=MUTED)
job = ParagraphStyle("job", parent=styles["Normal"], fontName="Times-Bold", fontSize=11.5, leading=13, textColor=INK)
company = ParagraphStyle("company", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=8.2, leading=11, textColor=BRASS)
date = ParagraphStyle("date", parent=styles["Normal"], fontName="Helvetica", fontSize=7.4, leading=10, textColor=MUTED, alignment=2)
footer = ParagraphStyle("footer", parent=styles["Normal"], fontName="Helvetica", fontSize=6.4, leading=8, textColor=MUTED, alignment=2)

def table(data, widths, style):
    return Table(data, colWidths=widths, style=[
        ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0), *style,
    ])

def rule():
    return table([[""]], [174 * mm], [("BACKGROUND", (0, 0), (-1, -1), RULE), ("ROWBACKGROUNDS", (0, 0), (-1, -1), [RULE])])

def job_block(title, company_text, dates, details):
    heading = table([[Paragraph(title, job), Paragraph(dates, date)], [Paragraph(company_text, company), ""]], [128 * mm, 46 * mm], [])
    return KeepTogether([heading, Spacer(1, 2 * mm), Paragraph(details, small), Spacer(1, 4.5 * mm)])

story = [
    table([[Paragraph("MING YANG", name), Paragraph("IDX-000 / PERSONAL RECORD", footer)], [Paragraph("Digital Operations &amp; Web Support Executive", role), ""]], [126 * mm, 48 * mm], []),
    Paragraph("Singapore, SG &nbsp; | &nbsp; +65 8710 0763 &nbsp; | &nbsp; mingyang@cprvision.com &nbsp; | &nbsp; linkedin.com/in/ming-yang-40a41512b", contact),
    Spacer(1, 4 * mm), rule(),
    Paragraph("PROFILE", label),
    Paragraph("Digital operations and web support executive with 7+ years of experience across customer-facing hospitality, CRM, loyalty, and marketing platforms. Combines a backend development foundation with practical strengths in microsite management, CMS publishing, AEM support, issue resolution, and cross-functional delivery.", body),
    Paragraph("EXPERIENCE", label),
    job_block("Digital Operations &amp; Web Support Executive", "CPR Vision Management Pte Ltd - Singapore", "DEC 2019 - PRESENT", "Support digital operations and microsite management for hospitality, CRM, loyalty, and marketing platforms across regional and global brands. Maintain hotel dining, restaurant, guest, and customer-feedback sites; coordinate content and campaign changes; and provide Adobe Experience Manager (AEM) updates, troubleshooting, and maintenance support. Partner with project, creative, and operations teams to resolve issues, coordinate requests within SLA expectations, and maintain documentation that supports continuity."),
    job_block("IT Developer", "SGshop Malaysia - Nusajaya, Johor", "FEB 2019 - DEC 2019", "Contributed to IT platform development and maintenance, supported backend development and systems engineering, and collaborated on e-commerce technology deployments."),
    job_block("IT Trainee", "SGshop Malaysia - Nusajaya, Johor", "SEP 2018 - FEB 2019", "Supported internal IT processes, infrastructure, routine systems administration, and the full-stack development fundamentals used in project delivery."),
    rule(), Paragraph("CORE CAPABILITIES", label),
]
skills = [
    [Paragraph("<b>Content &amp; CMS</b><br/>Adobe Experience Manager (AEM), CMS management, website content updates, digital publishing, hospitality microsites", small), Paragraph("<b>Digital Operations</b><br/>Website maintenance, microsite management, operational troubleshooting, workflow coordination, SLA support", small)],
    [Paragraph("<b>Technical Foundation</b><br/>PHP, MySQL, SQL Server, MongoDB, CodeIgniter, Yii, Laravel, CRM systems, backend support", small), Paragraph("<b>Project &amp; Brand Support</b><br/>Stakeholder communication, campaign support, hospitality brand sites, customer-facing experiences", small)],
]
story += [
    table(skills, [84 * mm, 90 * mm], [("LINEBELOW", (0, 0), (-1, 0), 0.25, RULE), ("RIGHTPADDING", (0, 0), (-1, -1), 6 * mm), ("TOPPADDING", (0, 0), (-1, -1), 1.5 * mm), ("BOTTOMPADDING", (0, 0), (-1, -1), 4 * mm)]),
    Paragraph("EDUCATION &amp; LANGUAGES", label),
    table([[Paragraph("<b>Computer Science - Bachelor's Degree</b><br/>Universiti Teknikal Malaysia Melaka | Jan 2015 - Jan 2018", small), Paragraph("<b>Languages</b><br/>English (Fluent) | Mandarin (Proficient) | Bahasa Melayu (Proficient)", small)]], [105 * mm, 69 * mm], []),
    Spacer(1, 5 * mm), rule(), Spacer(1, 2 * mm),
    Paragraph("6XARCHIVE / THE CURATOR - Digital systems, selected matter, and the stories that connect them.", footer),
]

def background(canvas, _):
    canvas.saveState()
    canvas.setFillColor(PAPER)
    canvas.rect(0, 0, A4[0], A4[1], stroke=0, fill=1)
    canvas.setStrokeColor(BRASS)
    canvas.setLineWidth(0.5)
    canvas.line(18 * mm, A4[1] - 10 * mm, A4[0] - 18 * mm, A4[1] - 10 * mm)
    canvas.restoreState()

doc.build(story, onFirstPage=background, onLaterPages=background)
print(out)
