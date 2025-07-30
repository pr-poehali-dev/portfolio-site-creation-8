import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Icon from "@/components/ui/icon"
import { Link } from "react-router-dom"

const Projects = () => {
  const projects = [
    {
      title: 'IoT Data Pipeline',
      description: 'Высокопроизводительная система обработки данных с IoT устройств на основе Rust и MQTT. Обрабатывает до 100,000 сообщений в секунду с минимальной задержкой.',
      fullDescription: 'Полнофункциональная система для сбора, обработки и анализа данных с IoT устройств. Включает микросервисную архитектуру, real-time аналитику и автоматическое масштабирование.',
      tech: ['Rust', 'MQTT', 'TimescaleDB', 'Docker', 'Kubernetes'],
      status: 'Завершён',
      metrics: { performance: 95, reliability: 98, efficiency: 92 },
      github: 'https://github.com/example/iot-pipeline',
      features: [
        'Real-time обработка данных',
        'Автоматическое масштабирование',
        'Мониторинг и алерты',
        'RESTful API',
        'Web dashboard'
      ]
    },
    {
      title: 'Embedded Control System',
      description: 'Система управления промышленным оборудованием на микроконтроллерах ARM Cortex-M с поддержкой FreeRTOS.',
      fullDescription: 'Критически важная система управления для промышленного оборудования с требованиями к реальному времени. Включает CAN Bus коммуникацию и отказоустойчивость.',
      tech: ['C', 'FreeRTOS', 'CAN Bus', 'ARM Cortex-M', 'Modbus'],
      status: 'В разработке',
      metrics: { performance: 88, reliability: 95, efficiency: 90 },
      github: '',
      features: [
        'Real-time операционная система',
        'CAN Bus коммуникация',
        'Отказоустойчивость',
        'Низкое энергопотребление',
        'Удаленная диагностика'
      ]
    },
    {
      title: 'Blockchain API Service',
      description: 'RESTful API сервис для взаимодействия с различными блокчейн сетями, включая Ethereum и Bitcoin.',
      fullDescription: 'Высокопроизводительный API сервис с поддержкой множественных блокчейн сетей. Обеспечивает безопасные транзакции и real-time мониторинг.',
      tech: ['Go', 'gRPC', 'Redis', 'PostgreSQL', 'Docker'],
      status: 'Завершён',
      metrics: { performance: 93, reliability: 97, efficiency: 89 },
      github: 'https://github.com/example/blockchain-api',
      features: [
        'Multi-blockchain поддержка',
        'gRPC и REST API',
        'Rate limiting',
        'Автоматические retry',
        'Comprehensive logging'
      ]
    },
    {
      title: 'Distributed Cache System',
      description: 'Высокопроизводительная распределенная система кэширования с автоматической репликацией и консистентным хешированием.',
      fullDescription: 'Масштабируемая система кэширования для высоконагруженных приложений с поддержкой consistent hashing и автоматического failover.',
      tech: ['C++', 'Redis Cluster', 'ZooKeeper', 'Protocol Buffers'],
      status: 'В архиве',
      metrics: { performance: 96, reliability: 94, efficiency: 91 },
      github: 'https://github.com/example/distributed-cache',
      features: [
        'Consistent hashing',
        'Автоматическая репликация',
        'Hot failover',
        'Monitoring и metrics',
        'Lua scripting поддержка'
      ]
    },
    {
      title: 'Neural Network Accelerator',
      description: 'FPGA-based ускоритель для нейронных сетей с оптимизированными вычислениями для inference в реальном времени.',
      fullDescription: 'Специализированный аппаратный ускоритель на FPGA для deep learning inference с минимальной задержкой и высокой пропускной способностью.',
      tech: ['Verilog', 'FPGA', 'OpenCL', 'CUDA', 'Python'],
      status: 'В разработке',
      metrics: { performance: 91, reliability: 86, efficiency: 94 },
      github: '',
      features: [
        'Hardware-accelerated inference',
        'Low-latency processing',
        'Flexible architecture',
        'Power efficiency',
        'Multi-model support'
      ]
    }
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
            <Icon name="Folder" size={24} />
            <h1 className="text-3xl font-bold">Проекты</h1>
          </div>
          <p className="text-muted-foreground">
            Подборка моих проектов в области Backend и Embedded разработки
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={20} className="text-green-500" />
                <div>
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm text-muted-foreground">Завершённых</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={20} className="text-blue-500" />
                <div>
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-sm text-muted-foreground">В разработке</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Icon name="Star" size={20} className="text-yellow-500" />
                <div>
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm text-muted-foreground">Средняя оценка</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:scale-[1.02] transition-transform duration-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge 
                    variant={
                      project.status === 'Завершён' ? 'default' :
                      project.status === 'В разработке' ? 'secondary' : 'outline'
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.fullDescription}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold mb-2">Технологии:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold mb-2">Ключевые особенности:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={12} className="text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div>
                  <h4 className="text-sm font-semibold mb-2">Метрики:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Производительность</span>
                      <span className="text-xs">{project.metrics.performance}%</span>
                    </div>
                    <Progress value={project.metrics.performance} className="h-1" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Надёжность</span>
                      <span className="text-xs">{project.metrics.reliability}%</span>
                    </div>
                    <Progress value={project.metrics.reliability} className="h-1" />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  {project.github && (
                    <Button variant="outline" size="sm" className="flex-1">
                      <Icon name="Github" size={14} className="mr-2" />
                      GitHub
                    </Button>
                  )}
                  <Button variant="outline" size="sm" className="flex-1">
                    <Icon name="ExternalLink" size={14} className="mr-2" />
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects