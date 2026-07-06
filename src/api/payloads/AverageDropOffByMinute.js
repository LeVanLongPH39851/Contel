export const AverageDropOffByMinute = {
    url: `${import.meta.env.VITE_API_DOMAIN}/api/v1/chart/data?form_data=%7B%22slice_id%22%3A930%7D&dashboard_id=68`,
    payload: {
        "datasource": {
            "id": 288,
            "type": "table"
        },
        "force": false,
        "queries": [
            {
                "time_range": "DATEADD(DATETIME(\"today\"),-15, day) : DATEADD(DATETIME(\"today\"),-1, day)",
                "filters": [
                    {
                        "col": "channel_name_tvd",
                        "op": "IN",
                        "val": [
                            "VTV1"
                        ]
                    },
                    {
                        "col": "program_name",
                        "op": "IN",
                        "val": [
                            "THỜI SỰ 19H"
                        ]
                    },
                    {
                        "col": "platform",
                        "op": "IN",
                        "val": [
                            "Big Screen"
                        ]
                    },
                    {
                        "col": "date",
                        "op": "TEMPORAL_RANGE",
                        "val": "No filter"
                    }
                ],
                "extras": {
                    "having": "",
                    "where": ""
                },
                "applied_time_extras": {},
                "columns": [],
                "metrics": [
                    {
                        "aggregate": null,
                        "column": null,
                        "datasourceWarning": false,
                        "expressionType": "SQL",
                        "hasCustomLabel": false,
                        "label": "AVG(avg_dropoff_by_view)*100*60",
                        "optionName": "metric_cyyehkh3pc_dpxfi9tu6ws",
                        "sqlExpression": "AVG(avg_dropoff_by_view)*100*60"
                    }
                ],
                "annotation_layers": [],
                "series_limit": 0,
                "order_desc": true,
                "url_params": {
                    "native_filters_key": "knRZmmYE3hO796xmRHK8xceKtBQ9ULgL99ZWYSIVRoUrc8TsGZdln8f8zxIuB8HE"
                },
                "custom_params": {},
                "custom_form_data": {}
            }
        ],
        "form_data": {
            "datasource": "288__table",
            "viz_type": "big_number_total",
            "slice_id": 930,
            "url_params": {
                "native_filters_key": "knRZmmYE3hO796xmRHK8xceKtBQ9ULgL99ZWYSIVRoUrc8TsGZdln8f8zxIuB8HE"
            },
            "metric": {
                "aggregate": null,
                "column": null,
                "datasourceWarning": false,
                "expressionType": "SQL",
                "hasCustomLabel": false,
                "label": "AVG(avg_dropoff_by_view)*100*60",
                "optionName": "metric_cyyehkh3pc_dpxfi9tu6ws",
                "sqlExpression": "AVG(avg_dropoff_by_view)*100*60"
            },
            "adhoc_filters": [
                {
                    "clause": "WHERE",
                    "comparator": [
                        "Big Screen"
                    ],
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "filterOptionName": "filter_s3iagbe0ge9_1ddzvlfowmb",
                    "isExtra": false,
                    "isNew": false,
                    "operator": "IN",
                    "operatorId": "IN",
                    "sqlExpression": null,
                    "subject": "platform"
                },
                {
                    "clause": "WHERE",
                    "comparator": "No filter",
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "filterOptionName": "filter_libge55zotr_6r3r1vo69mv",
                    "isExtra": true,
                    "isNew": false,
                    "operator": "TEMPORAL_RANGE",
                    "sqlExpression": null,
                    "subject": "date"
                }
            ],
            "header_font_size": 0.4,
            "subheader_font_size": 0.15,
            "y_axis_format": ",.2f",
            "time_format": "smart_date",
            "conditional_formatting": [],
            "dashboards": [
                68
            ],
            "extra_form_data": {
                "filters": [
                    {
                        "col": "channel_name_tvd",
                        "op": "IN",
                        "val": [
                            "VTV1"
                        ]
                    },
                    {
                        "col": "program_name",
                        "op": "IN",
                        "val": [
                            "THỜI SỰ 19H"
                        ]
                    }
                ],
                "time_range": "DATEADD(DATETIME(\"today\"),-15, day) : DATEADD(DATETIME(\"today\"),-1, day)"
            },
            "chart_id": 930,
            "label_colors": {},
            "shared_label_colors": [],
            "map_label_colors": {
                "AVG(Watch Time Efficiency)": "#1FA8C9",
                "AVG(dropoff_rate_by_view)": "#1FA8C9",
                "AT RISK": "#1FA8C9",
                "REVIEW": "#454E7C",
                "MAINTAIN": "#5AC189"
            },
            "extra_filters": [],
            "force": false,
            "result_format": "json",
            "result_type": "full"
        },
        "result_format": "json",
        "result_type": "full"
    }
};