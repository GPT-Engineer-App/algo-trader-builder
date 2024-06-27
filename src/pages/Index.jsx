import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const Index = () => {
  const [strategyName, setStrategyName] = useState("");
  const [strategyDescription, setStrategyDescription] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const handleBuildStrategy = () => {
    console.log("Building strategy:", strategyName, strategyDescription);
  };

  const handleBacktestStrategy = () => {
    console.log("Backtesting strategy:", strategyName);
  };

  const handleForecastStrategy = () => {
    console.log("Forecasting strategy with model:", selectedModel);
  };

  return (
    <div className="h-screen w-screen p-4">
      <Tabs defaultValue="build">
        <TabsList className="mb-4">
          <TabsTrigger value="build">Build Strategy</TabsTrigger>
          <TabsTrigger value="backtest">Backtest Strategy</TabsTrigger>
          <TabsTrigger value="forecast">Forecast</TabsTrigger>
        </TabsList>

        <TabsContent value="build">
          <Card>
            <CardHeader>
              <CardTitle>Build Trading Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="strategyName">Strategy Name</Label>
                  <Input
                    id="strategyName"
                    value={strategyName}
                    onChange={(e) => setStrategyName(e.target.value)}
                    placeholder="Enter strategy name"
                  />
                </div>
                <div>
                  <Label htmlFor="strategyDescription">Strategy Description</Label>
                  <Textarea
                    id="strategyDescription"
                    value={strategyDescription}
                    onChange={(e) => setStrategyDescription(e.target.value)}
                    placeholder="Enter strategy description"
                  />
                </div>
                <Button onClick={handleBuildStrategy}>Build Strategy</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backtest">
          <Card>
            <CardHeader>
              <CardTitle>Backtest Trading Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="backtestStrategyName">Strategy Name</Label>
                  <Input
                    id="backtestStrategyName"
                    value={strategyName}
                    onChange={(e) => setStrategyName(e.target.value)}
                    placeholder="Enter strategy name"
                  />
                </div>
                <Button onClick={handleBacktestStrategy}>Backtest Strategy</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forecast">
          <Card>
            <CardHeader>
              <CardTitle>Forecast Using Machine Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="selectModel">Select Model</Label>
                  <Select onValueChange={setSelectedModel}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="model1">Model 1</SelectItem>
                      <SelectItem value="model2">Model 2</SelectItem>
                      <SelectItem value="model3">Model 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={handleForecastStrategy}>Forecast</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;