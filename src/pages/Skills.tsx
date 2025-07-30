import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Icon from "@/components/ui/icon"
import { Link } from "react-router-dom"

const Skills = () => {
  const skillCategories = [
    {
      title: 'Языки программирования',
      icon: 'Code2',
      skills: [
        { name: 'C/C++', level: 95, experience: '8+ лет', description: 'Системное программирование, embedded разработка' },
        { name: 'Python', level: 88, experience: '6+ лет', description: 'Backend, автоматизация, ML/AI интеграции' },
        { name: 'Rust', level: 82, experience: '3+ года', description: 'Высокопроизводительные системы, WebAssembly' },
        { name: 'Go', level: 75, experience: '2+ года', description: 'Микросервисы, API разработка' },
        { name: 'JavaScript/TypeScript', level: 70, experience: '4+ года', description: 'Node.js backend, инструменты разработки' },
        { name: 'Assembly', level: 85, experience: '5+ лет', description: 'ARM, x86, оптимизация критичного кода' }
      ]
    },
    {
      title: 'Базы данных',
      icon: 'Database',
      skills: [
        { name: 'PostgreSQL', level: 90, experience: '6+ лет', description: 'Оптимизация запросов, репликация, шардинг' },
        { name: 'Redis', level: 85, experience: '4+ года', description: 'Кэширование, pub/sub, distributed locks' },
        { name: 'TimescaleDB', level: 80, experience: '2+ года', description: 'Time-series данные, IoT аналитика' },
        { name: 'MongoDB', level: 70, experience: '3+ года', description: 'Document store, агрегации' },
        { name: 'InfluxDB', level: 75, experience: '2+ года', description: 'Метрики, мониторинг, DevOps' }
      ]
    },
    {
      title: 'DevOps & Инфраструктура',
      icon: 'Server',
      skills: [
        { name: 'Docker', level: 88, experience: '5+ лет', description: 'Контейнеризация, multi-stage builds' },
        { name: 'Kubernetes', level: 82, experience: '3+ года', description: 'Оркестрация, service mesh, monitoring' },
        { name: 'Linux', level: 92, experience: '10+ лет', description: 'Системное администрирование, performance tuning' },
        { name: 'NGINX', level: 85, experience: '6+ лет', description: 'Load balancing, reverse proxy, SSL/TLS' },
        { name: 'Terraform', level: 75, experience: '2+ года', description: 'Infrastructure as Code, AWS/GCP' },
        { name: 'CI/CD', level: 80, experience: '4+ года', description: 'GitLab CI, GitHub Actions, Jenkins' }
      ]
    },
    {
      title: 'Embedded & Hardware',
      icon: 'Cpu',
      skills: [
        { name: 'ARM Cortex-M', level: 90, experience: '7+ лет', description: 'STM32, Nordic, real-time системы' },
        { name: 'FreeRTOS', level: 88, experience: '5+ лет', description: 'Task management, IPC, memory management' },
        { name: 'CAN Bus', level: 85, experience: '4+ года', description: 'Автомобильные протоколы, промышленная автоматизация' },
        { name: 'SPI/I2C/UART', level: 92, experience: '8+ лет', description: 'Низкоуровневые протоколы, driver разработка' },
        { name: 'FPGA', level: 70, experience: '2+ года', description: 'Verilog, signal processing, hardware acceleration' },
        { name: 'PCB Design', level: 65, experience: '3+ года', description: 'Altium Designer, схемотехника' }
      ]
    },
    {
      title: 'Сетевые технологии',
      icon: 'Network',
      skills: [
        { name: 'TCP/IP', level: 90, experience: '8+ лет', description: 'Сетевое программирование, протоколы' },
        { name: 'HTTP/gRPC', level: 88, experience: '6+ лет', description: 'API design, микросервисы' },
        { name: 'MQTT', level: 85, experience: '4+ года', description: 'IoT коммуникации, pub/sub messaging' },
        { name: 'WebSocket', level: 80, experience: '3+ года', description: 'Real-time коммуникации, streaming' },
        { name: 'Modbus/OPC-UA', level: 75, experience: '3+ года', description: 'Промышленные протоколы, SCADA интеграция' }
      ]
    },
    {
      title: 'Инструменты разработки',
      icon: 'Wrench',
      skills: [
        { name: 'Git', level: 90, experience: '8+ лет', description: 'Version control, branching strategies' },
        { name: 'GDB/Valgrind', level: 85, experience: '6+ лет', description: 'Debugging, memory analysis, profiling' },
        { name: 'CMake', level: 80, experience: '5+ лет', description: 'Build systems, cross-compilation' },
        { name: 'Wireshark', level: 75, experience: '4+ года', description: 'Network analysis, protocol debugging' },
        { name: 'Oscilloscope/Logic Analyzer', level: 82, experience: '6+ лет', description: 'Hardware debugging, signal analysis' }
      ]
    }
  ]

  const certifications = [
    { name: 'AWS Certified Solutions Architect', year: 2023, issuer: 'Amazon Web Services' },
    { name: 'Certified Kubernetes Administrator', year: 2022, issuer: 'Cloud Native Computing Foundation' },
    { name: 'ARM Accredited Engineer', year: 2021, issuer: 'ARM Ltd' },
    { name: 'Linux Professional Institute Certification', year: 2020, issuer: 'LPI' }
  ]

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
            <Icon name="ArrowLeft" size={16} />
            Назад к портфолио
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <Icon name="Code2" size={24} />
            <h1 className="text-3xl font-bold">Навыки и технологии</h1>
          </div>
          <p className="text-muted-foreground">
            Полный список моих технических навыков и опыта работы
          </p>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-500">10+</div>
              <div className="text-sm text-muted-foreground">Лет опыта</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-500">25+</div>
              <div className="text-sm text-muted-foreground">Технологий</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-500">50+</div>
              <div className="text-sm text-muted-foreground">Проектов</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-500">4</div>
              <div className="text-sm text-muted-foreground">Сертификата</div>
            </CardContent>
          </Card>
        </div>

        {/* Skills by Category */}
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name={category.icon as any} size={24} />
                  {category.title}
                </CardTitle>
                <CardDescription>
                  {category.skills.length} навыков в этой категории
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">{skill.name}</h4>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {skill.experience}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Icon name="Award" size={24} />
              Сертификации
            </CardTitle>
            <CardDescription>
              Профессиональные сертификаты и аккредитации
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                  <Icon name="CheckCircle" size={20} className="text-green-500" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Skills