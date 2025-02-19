---
slug: '/docs/components/debug-gdebug'
title: '调试功能-gdebug'
sidebar_position: 0
hide_title: true
keywords: [GoFrame,GoFrame框架,调试功能,gdebug,GoFrame调试,gdebug组件,堆栈分析,调用链信息,性能优化,接口文档]
description: 'GoFrame框架通过gdebug组件提供了丰富的调试功能，适用于开发环境中堆栈和调用链的分析。虽然调试方法与性能效率相关性不强，但可以帮助开发者更好地了解代码执行路径和调用信息。'
---

`goframe` 框架提供了丰富的调试功能，由 `gdebug` 组件实现。
:::warning
所谓的“调试”方法大多数和开发环境有一定关系，包含堆栈和调用链信息分析，并且性能往往不是特别高。
:::
**使用方式：**

```go
import "github.com/gogf/gf/v2/debug/gdebug"
```

**接口文档：**

[https://pkg.go.dev/github.com/gogf/gf/v2/debug/gdebug](https://pkg.go.dev/github.com/gogf/gf/v2/debug/gdebug)

**方法列表：**

```go
func BinVersion() string
func BinVersionMd5() string
func Caller(skip ...int) (function string, path string, line int)
func CallerDirectory() string
func CallerFileLine() string
func CallerFileLineShort() string
func CallerFilePath() string
func CallerFunction() string
func CallerPackage() string
func CallerWithFilter(filter string, skip ...int) (function string, path string, line int)
func FuncName(f interface{}) string
func FuncPath(f interface{}) string
func GoroutineId() int
func PrintStack(skip ...int)
func Stack(skip ...int) string
func StackWithFilter(filter string, skip ...int) string
func StackWithFilters(filters []string, skip ...int) string
func TestDataPath(names ...string) string
```

> 熟悉 `PHP` 的同学可能比较好理解，这里某些方法其实和 `PHP` 的部分 [魔术常量](https://www.php.net/manual/en/language.constants.predefined.php) 功能一致。 `CallerDirectory` 对应 `__DIR__`， `CallerFilePath` 对应 `__FILE__`， `CallerFunction` 对应 `__FUNCTION__`。