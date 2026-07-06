export const AudienceFullChannel = {
    url: `${import.meta.env.VITE_API_DOMAIN}/api/v1/chart/data?form_data=%7B%22slice_id%22%3A942%7D&dashboard_id=68`,
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
                        "aggregate": "MAX",
                        "column": {
                            "advanced_data_type": null,
                            "changed_on": "2026-06-26T02:33:37.265827",
                            "column_name": "is_max_leadin",
                            "created_on": "2026-06-26T02:33:37.265826",
                            "description": null,
                            "expression": "CASE WHEN lead_in_effect = MAX(lead_in_effect) OVER() THEN program_name ELSE NULL END",
                            "extra": "{}",
                            "filterable": true,
                            "groupby": true,
                            "id": 3577,
                            "is_active": true,
                            "is_dttm": false,
                            "python_date_format": null,
                            "type": null,
                            "type_generic": null,
                            "uuid": "0afbf08c-f85d-4af5-9582-562cbea2147e",
                            "verbose_name": null
                        },
                        "datasourceWarning": false,
                        "expressionType": "SIMPLE",
                        "hasCustomLabel": true,
                        "label": "Điểm bleed cao nhất",
                        "optionName": "metric_hg40t60482a_ii3c2gst6zb",
                        "sqlExpression": null
                    },
                    {
                        "aggregate": null,
                        "column": null,
                        "datasourceWarning": false,
                        "expressionType": "SQL",
                        "hasCustomLabel": true,
                        "label": "Lead-in TB toàn kênh",
                        "optionName": "metric_ij7wky90iyb_yq3wfijvuds",
                        "sqlExpression": "AVG(lead_in_effect)*100"
                    },
                    {
                        "aggregate": "MIN",
                        "column": {
                            "advanced_data_type": null,
                            "changed_on": "2026-06-26T02:33:37.265800",
                            "column_name": "is_min_leadin",
                            "created_on": "2026-06-26T02:33:37.265796",
                            "description": null,
                            "expression": "CASE WHEN lead_in_effect = MIN(lead_in_effect) OVER() THEN program_name ELSE NULL END",
                            "extra": "{}",
                            "filterable": true,
                            "groupby": true,
                            "id": 3576,
                            "is_active": true,
                            "is_dttm": false,
                            "python_date_format": null,
                            "type": null,
                            "type_generic": null,
                            "uuid": "03d179e1-c4dc-4acc-a6f4-e1d64ec78d38",
                            "verbose_name": null
                        },
                        "datasourceWarning": false,
                        "expressionType": "SIMPLE",
                        "hasCustomLabel": true,
                        "label": "Chương trình giữ tốt nhất",
                        "optionName": "metric_1qbywybwqlt_zm89kcj70ns",
                        "sqlExpression": null
                    },
                    {
                        "aggregate": null,
                        "column": null,
                        "datasourceWarning": false,
                        "expressionType": "SQL",
                        "hasCustomLabel": true,
                        "label": "Rủi ro chain reaction",
                        "optionName": "metric_ozv1wjunr5_eqc51pi0r27",
                        "sqlExpression": "COUNT(CASE WHEN lead_in_effect < 40 THEN 1 END)"
                    }
                ],
                "orderby": [
                    [
                        {
                            "aggregate": "MAX",
                            "column": {
                                "advanced_data_type": null,
                                "changed_on": "2026-06-26T02:33:37.265827",
                                "column_name": "is_max_leadin",
                                "created_on": "2026-06-26T02:33:37.265826",
                                "description": null,
                                "expression": "CASE WHEN lead_in_effect = MAX(lead_in_effect) OVER() THEN program_name ELSE NULL END",
                                "extra": "{}",
                                "filterable": true,
                                "groupby": true,
                                "id": 3577,
                                "is_active": true,
                                "is_dttm": false,
                                "python_date_format": null,
                                "type": null,
                                "type_generic": null,
                                "uuid": "0afbf08c-f85d-4af5-9582-562cbea2147e",
                                "verbose_name": null
                            },
                            "datasourceWarning": false,
                            "expressionType": "SIMPLE",
                            "hasCustomLabel": true,
                            "label": "Điểm bleed cao nhất",
                            "optionName": "metric_hg40t60482a_ii3c2gst6zb",
                            "sqlExpression": null
                        },
                        false
                    ]
                ],
                "annotation_layers": [],
                "row_limit": 1,
                "series_limit": 0,
                "order_desc": false,
                "url_params": {
                    "native_filters_key": "knRZmmYE3hO796xmRHK8xceKtBQ9ULgL99ZWYSIVRoUrc8TsGZdln8f8zxIuB8HE"
                },
                "custom_params": {},
                "custom_form_data": {},
                "post_processing": [],
                "time_offsets": []
            }
        ],
        "form_data": {
            "datasource": "288__table",
            "viz_type": "table",
            "slice_id": 942,
            "url_params": {
                "native_filters_key": "knRZmmYE3hO796xmRHK8xceKtBQ9ULgL99ZWYSIVRoUrc8TsGZdln8f8zxIuB8HE"
            },
            "query_mode": "aggregate",
            "groupby": [],
            "temporal_columns_lookup": {
                "date": true
            },
            "metrics": [
                {
                    "aggregate": "MAX",
                    "column": {
                        "advanced_data_type": null,
                        "changed_on": "2026-06-26T02:33:37.265827",
                        "column_name": "is_max_leadin",
                        "created_on": "2026-06-26T02:33:37.265826",
                        "description": null,
                        "expression": "CASE WHEN lead_in_effect = MAX(lead_in_effect) OVER() THEN program_name ELSE NULL END",
                        "extra": "{}",
                        "filterable": true,
                        "groupby": true,
                        "id": 3577,
                        "is_active": true,
                        "is_dttm": false,
                        "python_date_format": null,
                        "type": null,
                        "type_generic": null,
                        "uuid": "0afbf08c-f85d-4af5-9582-562cbea2147e",
                        "verbose_name": null
                    },
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "hasCustomLabel": true,
                    "label": "Điểm bleed cao nhất",
                    "optionName": "metric_hg40t60482a_ii3c2gst6zb",
                    "sqlExpression": null
                },
                {
                    "aggregate": null,
                    "column": null,
                    "datasourceWarning": false,
                    "expressionType": "SQL",
                    "hasCustomLabel": true,
                    "label": "Lead-in TB toàn kênh",
                    "optionName": "metric_ij7wky90iyb_yq3wfijvuds",
                    "sqlExpression": "AVG(lead_in_effect)*100"
                },
                {
                    "aggregate": "MIN",
                    "column": {
                        "advanced_data_type": null,
                        "changed_on": "2026-06-26T02:33:37.265800",
                        "column_name": "is_min_leadin",
                        "created_on": "2026-06-26T02:33:37.265796",
                        "description": null,
                        "expression": "CASE WHEN lead_in_effect = MIN(lead_in_effect) OVER() THEN program_name ELSE NULL END",
                        "extra": "{}",
                        "filterable": true,
                        "groupby": true,
                        "id": 3576,
                        "is_active": true,
                        "is_dttm": false,
                        "python_date_format": null,
                        "type": null,
                        "type_generic": null,
                        "uuid": "03d179e1-c4dc-4acc-a6f4-e1d64ec78d38",
                        "verbose_name": null
                    },
                    "datasourceWarning": false,
                    "expressionType": "SIMPLE",
                    "hasCustomLabel": true,
                    "label": "Chương trình giữ tốt nhất",
                    "optionName": "metric_1qbywybwqlt_zm89kcj70ns",
                    "sqlExpression": null
                },
                {
                    "aggregate": null,
                    "column": null,
                    "datasourceWarning": false,
                    "expressionType": "SQL",
                    "hasCustomLabel": true,
                    "label": "Rủi ro chain reaction",
                    "optionName": "metric_ozv1wjunr5_eqc51pi0r27",
                    "sqlExpression": "COUNT(CASE WHEN lead_in_effect < 40 THEN 1 END)"
                }
            ],
            "all_columns": [
                "program_name"
            ],
            "percent_metrics": [],
            "adhoc_filters": [
                {
                    "clause": "WHERE",
                    "comparator": "No filter",
                    "expressionType": "SIMPLE",
                    "operator": "TEMPORAL_RANGE",
                    "subject": "date"
                }
            ],
            "order_by_cols": [],
            "server_pagination": false,
            "row_limit": "1",
            "server_page_length": 10,
            "order_desc": false,
            "table_timestamp_format": "smart_date",
            "page_length": null,
            "allow_rearrange_columns": false,
            "allow_render_html": true,
            "show_cell_bars": true,
            "color_pn": true,
            "comparison_color_scheme": "Green",
            "conditional_formatting": [],
            "comparison_type": "values",
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
                    }
                ],
                "time_range": "DATEADD(DATETIME(\"today\"),-15, day) : DATEADD(DATETIME(\"today\"),-1, day)"
            },
            "chart_id": 942,
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