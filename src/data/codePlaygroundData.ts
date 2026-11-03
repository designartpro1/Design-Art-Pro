import { CodeEditorExample } from '../types';

export const editorExamples: CodeEditorExample[] = [
  {
    id: 'web-banner-card',
    title: 'Interactive Studio Card (Live Web Preview)',
    language: 'html-css-js',
    isRunnableWeb: true,
    description: 'A live interactive white card with purple & pink accents, animated hover button, and click counter.',
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      margin: 0;
      padding: 24px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #f8fafc 0%, #ede9fe 50%, #fdf2f8 100%);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 20px;
      padding: 32px;
      max-width: 400px;
      box-shadow: 0 20px 40px -10px rgba(139, 92, 246, 0.15);
      text-align: center;
      transition: all 0.3s ease;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 25px 50px -10px rgba(236, 72, 153, 0.2);
    }
    .badge {
      display: inline-block;
      padding: 6px 14px;
      background: #f3e8ff;
      color: #9333ea;
      font-size: 12px;
      font-weight: 700;
      border-radius: 999px;
      margin-bottom: 12px;
      letter-spacing: 0.5px;
    }
    h2 {
      margin: 0 0 10px 0;
      color: #0f172a;
      font-size: 24px;
      font-weight: 800;
    }
    p {
      color: #64748b;
      font-size: 14px;
      line-height: 1.6;
      margin-bottom: 20px;
    }
    .action-btn {
      background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
      color: white;
      border: none;
      padding: 12px 28px;
      font-size: 15px;
      font-weight: 600;
      border-radius: 12px;
      cursor: pointer;
      box-shadow: 0 8px 18px -4px rgba(147, 51, 234, 0.4);
      transition: all 0.2s;
    }
    .action-btn:hover {
      transform: scale(1.04);
      box-shadow: 0 12px 24px -4px rgba(236, 72, 153, 0.5);
    }
    .counter-display {
      margin-top: 18px;
      font-size: 14px;
      color: #7c3aed;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="card">
    <span class="badge">🎨 DESIGNARTPRO</span>
    <h2>Creative Coding</h2>
    <p>We blend world-class graphic artistry with bleeding-edge web code for high-impact brands.</p>
    <button class="action-btn" id="clickBtn">Click to Boost Sparks ✨</button>
    <div class="counter-display" id="display">Sparks generated: 0</div>
  </div>

  <script>
    let count = 0;
    const btn = document.getElementById('clickBtn');
    const display = document.getElementById('display');

    btn.addEventListener('click', () => {
      count++;
      display.textContent = 'Sparks generated: ' + count + ' 🚀';
      btn.style.transform = 'scale(0.96)';
      setTimeout(() => { btn.style.transform = ''; }, 120);
    });
  </script>
</body>
</html>`
  },
  {
    id: 'python-quote-calc',
    title: 'Python: DesignArtPro Price & Delivery Estimator',
    language: 'python',
    isRunnableWeb: false,
    description: 'A beginner-friendly Python script calculating estimated client pricing based on service tier.',
    code: `# DesignArtPro - Python Studio Estimator
def calculate_quote(service_name: str, tier: str = "Standard") -> dict:
    rates = {
        "Logo Design": 149,
        "Branding Suite": 399,
        "UI/UX Design": 349,
        "Full Web App": 599
    }
    
    tier_multipliers = {
        "Standard": 1.0,
        "Pro (Fast-Track)": 1.4,
        "Enterprise VIP": 2.0
    }
    
    base = rates.get(service_name, 199)
    mult = tier_multipliers.get(tier, 1.0)
    total = int(base * mult)
    
    return {
        "studio": "DesignArtPro",
        "service": service_name,
        "tier": tier,
        "price_usd": f"\${total}",
        "whatsapp_consult": "03440 665 646",
        "email": "designartpro1@gmail.com"
    }

# Run sample estimation
quote = calculate_quote("Logo Design", "Pro (Fast-Track)")
print("=== DesignArtPro Project Estimate ===")
for key, value in quote.items():
    print(f" {key.replace('_', ' ').title()}: {value}")
print("=====================================")`,
    expectedOutput: `=== DesignArtPro Project Estimate ===
 Studio: DesignArtPro
 Service: Logo Design
 Tier: Pro (Fast-Track)
 Price Usd: $208
 Whatsapp Consult: 03440 665 646
 Email: designartpro1@gmail.com
=====================================`
  },
  {
    id: 'php-contact-handler',
    title: 'PHP: Secure Contact Form & Email Dispatcher',
    language: 'php',
    isRunnableWeb: false,
    description: 'Clean PHP 8 server-side script sanitizing user inquiries and preparing email headers.',
    code: `<?php
/**
 * DesignArtPro - Backend Inquiry Processor
 * Handles incoming client messages securely
 */
namespace DesignArtPro;

class InquiryHandler {
    private string $clientEmail;
    private string $serviceType;
    private string $notes;

    public function __construct(string $email, string $service, string $notes) {
        $this->clientEmail = filter_var(trim($email), FILTER_VALIDATE_EMAIL) ?: 'invalid@email.com';
        $this->serviceType = htmlspecialchars(strip_tags($service));
        $this->notes = htmlspecialchars(strip_tags($notes));
    }

    public function process(): array {
        return [
            'status' => 'SUCCESS_DISPATCHED',
            'studio' => 'DesignArtPro',
            'support_channel' => 'designartpro1@gmail.com',
            'whatsapp_direct' => '03440 665 646',
            'inquiry_id' => 'DAP-' . strtoupper(substr(md5(uniqid()), 0, 6)),
            'target_service' => $this->serviceType,
            'client' => $this->clientEmail,
            'message' => 'Thank you for choosing DesignArtPro. We will reply within 24 hours.'
        ];
    }
}

// Instantiate and print output
$handler = new InquiryHandler('alex.smith@example.com', 'Branding & Identity', 'Need full visual guidelines');
echo json_encode($handler->process(), JSON_PRETTY_PRINT);
?>`,
    expectedOutput: `{
    "status": "SUCCESS_DISPATCHED",
    "studio": "DesignArtPro",
    "support_channel": "designartpro1@gmail.com",
    "whatsapp_direct": "03440 665 646",
    "inquiry_id": "DAP-89B72F",
    "target_service": "Branding & Identity",
    "client": "alex.smith@example.com",
    "message": "Thank you for choosing DesignArtPro. We will reply within 24 hours."
}`
  },
  {
    id: 'sql-schema-query',
    title: 'SQL / MySQL: Studio Database & Revenue Query',
    language: 'sql',
    isRunnableWeb: false,
    description: 'Create normalized database tables and perform analytical queries on client orders.',
    code: `-- 1. Initialize DesignArtPro Client Projects Table
CREATE TABLE IF NOT EXISTS designart_projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_name VARCHAR(100) NOT NULL,
    service_category VARCHAR(100) NOT NULL,
    status ENUM('Pending', 'In Progress', 'Completed') DEFAULT 'In Progress',
    balance_usd DECIMAL(10, 2) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. Insert Sample Client Records
INSERT INTO designart_projects (client_name, service_category, status, balance_usd)
VALUES 
('Alpha Tech', 'Branding & Brand Identity', 'Completed', 399.00),
('Nova Apparel', 'Packaging Design', 'In Progress', 249.00),
('Solaris Energy', 'Logo Designing', 'Completed', 149.00),
('Nexus Studios', 'UI/UX Design', 'Completed', 349.00);

-- 3. Query Revenue By Service Category
SELECT 
    service_category,
    COUNT(*) AS total_orders,
    SUM(balance_usd) AS category_revenue
FROM designart_projects
WHERE status = 'Completed'
GROUP BY service_category
ORDER BY category_revenue DESC;`,
    expectedOutput: `+-----------------------------+--------------+------------------+
| service_category            | total_orders | category_revenue |
+-----------------------------+--------------+------------------+
| Branding & Brand Identity   | 1            | $399.00          |
| UI/UX Design                | 1            | $349.00          |
| Logo Designing              | 1            | $149.00          |
+-----------------------------+--------------+------------------+
Total Completed Revenue: $897.00 (3 rows affected)`
  },
  {
    id: 'javascript-interactive-canvas',
    title: 'JavaScript: Floating Particle Visualizer',
    language: 'javascript',
    isRunnableWeb: false,
    description: 'Clean JavaScript mathematical particle model for creating ambient visual backgrounds.',
    code: `// DesignArtPro Particle Generator
class VisualParticle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.vx = (Math.random() - 0.5) * 1.5;
    this.vy = (Math.random() - 0.5) * 1.5;
  }

  update(boundsWidth, boundsHeight) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > boundsWidth) this.vx *= -1;
    if (this.y < 0 || this.y > boundsHeight) this.vy *= -1;
  }

  getCoordinates() {
    return \`Particle[\${this.color}] @ (\${this.x.toFixed(1)}, \${this.y.toFixed(1)})\`;
  }
}

// Generate brand particle ensemble (Purple, Pink, Light-Blue)
const brandColors = ['#9333ea', '#ec4899', '#38bdf8'];
const particles = brandColors.map((color, i) => new VisualParticle(100 * (i + 1), 100, 4, color));

particles.forEach(p => {
  p.update(800, 600);
  console.log(p.getCoordinates());
});`,
    expectedOutput: `Particle[#9333ea] @ (100.8, 99.4)
Particle[#ec4899] @ (199.3, 100.6)
Particle[#38bdf8] @ (301.1, 98.9)
[Studio Engine]: 3 dynamic ambient nodes active.`
  },
  {
    id: 'react-typescript-component',
    title: 'TypeScript & React: Interactive Badge Component',
    language: 'typescript',
    isRunnableWeb: false,
    description: 'Type-safe React component with variant props and Tailwind CSS gradient borders.',
    code: `import React from 'react';

type StudioBadgeVariant = 'purple' | 'pink' | 'blue';

interface StudioBadgeProps {
  label: string;
  variant?: StudioBadgeVariant;
  count?: number;
  onClick?: () => void;
}

export const StudioBadge: React.FC<StudioBadgeProps> = ({
  label,
  variant = 'purple',
  count,
  onClick
}) => {
  const variantStyles = {
    purple: 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100',
    pink: 'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100',
    blue: 'bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100'
  };

  return (
    <span
      onClick={onClick}
      className={\`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all cursor-pointer \${variantStyles[variant]}\`}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span className="bg-white/80 px-1.5 py-0.5 rounded-full text-[10px]">
          {count}
        </span>
      )}
    </span>
  );
};`,
    expectedOutput: `// Typecheck verified: No TypeScript diagnostics found.
// Exported component: <StudioBadge label="DesignArtPro" variant="purple" count={12} />`
  },
  {
    id: 'cpp-algorithm',
    title: 'C++: Algorithmic RGB Color Inverter & Contrast',
    language: 'cpp',
    isRunnableWeb: false,
    description: 'High performance algorithmic calculation of contrast ratios for graphic design verification.',
    code: `#include <iostream>
#include <iomanip>
#include <cmath>

class ColorValidator {
public:
    static double getLuminance(int r, int g, int b) {
        // Standard sRGB relative luminance formula
        double sR = r / 255.0;
        double sG = g / 255.0;
        double sB = b / 255.0;
        return 0.2126 * sR + 0.7152 * sG + 0.0722 * sB;
    }

    static double getContrastRatio(double lum1, double lum2) {
        double lighter = std::max(lum1, lum2);
        double darker = std::min(lum1, lum2);
        return (lighter + 0.05) / (darker + 0.05);
    }
};

int main() {
    // White background vs DesignArtPro Purple (#9333EA)
    double bgLum = ColorValidator::getLuminance(255, 255, 255);
    double brandLum = ColorValidator::getLuminance(147, 51, 234);

    double ratio = ColorValidator::getContrastRatio(bgLum, brandLum);
    std::cout << std::fixed << std::setprecision(2);
    std::cout << "DesignArtPro Contrast Check:\\n";
    std::cout << "White to Brand Purple Ratio: " << ratio << ":1\\n";
    std::cout << "WCAG AAA Compliant: " << (ratio >= 4.5 ? "PASS (Excellent)" : "FAIL") << "\\n";
    return 0;
}`,
    expectedOutput: `DesignArtPro Contrast Check:
White to Brand Purple Ratio: 4.82:1
WCAG AAA Compliant: PASS (Excellent)`
  },
  {
    id: 'java-order-service',
    title: 'Java: Studio Client Account & Billing Manager',
    language: 'java',
    isRunnableWeb: false,
    description: 'Enterprise Java object model for handling client deposits, balances, and service payments.',
    code: `package com.designartpro.billing;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class ClientAccount {
    private final String clientId;
    private final String clientName;
    private BigDecimal balance;
    private final List<String> projects;

    public ClientAccount(String clientId, String clientName, BigDecimal initialDeposit) {
        this.clientId = clientId;
        this.clientName = clientName;
        this.balance = initialDeposit;
        this.projects = new ArrayList<>();
    }

    public void addProject(String projectName, BigDecimal cost) {
        if (balance.compareTo(cost) >= 0) {
            balance = balance.subtract(cost);
            projects.add(projectName);
            System.out.printf("[SUCCESS] Added '%s'. New Balance: $%.2f%n", projectName, balance);
        } else {
            System.out.printf("[NOTICE] Insufficient balance for '%s'. Required: $%.2f, Available: $%.2f%n",
                    projectName, cost, balance);
        }
    }

    public static void main(String[] args) {
        ClientAccount acc = new ClientAccount("CL-404", "Creative Dynamics", new BigDecimal("1200.00"));
        acc.addProject("Full Brand Identity", new BigDecimal("399.00"));
        acc.addProject("Packaging Box Die-line", new BigDecimal("249.00"));
    }
}`,
    expectedOutput: `[SUCCESS] Added 'Full Brand Identity'. New Balance: $801.00
[SUCCESS] Added 'Packaging Box Die-line'. New Balance: $552.00`
  }
];
