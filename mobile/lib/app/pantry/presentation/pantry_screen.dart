import 'package:flutter/material.dart';

import '../../../core/constants/app_spacing.dart';
import '../../../core/widgets/custom_app_bar.dart';

/// Demo data: categories and items matching the design.
class _PantryDemoData {
  static const List<({String name, List<String> items})> categories = [
    (name: 'Herbes & Spices', items: [
      'Onion powder',
      'Thyme',
      'Salt',
      'Olive oil',
      'Chilli powder',
      'Chicken stock',
    ]),
    (name: 'Vegetables & Olis', items: [
      'Olive oil',
      'Onions',
    ]),
    (name: 'Meats And Seafood', items: [
      'Chicken stock',
    ]),
  ];
}

class PantryScreen extends StatelessWidget {
  const PantryScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: const CustomAppBar(title: 'Pantry'),
      body: ListView(
        padding: EdgeInsets.fromLTRB(
          AppSpacing.horizontalMargin,
          8,
          AppSpacing.horizontalMargin,
          140,
        ),
        children: [
          for (final category in _PantryDemoData.categories) ...[
            _CategoryHeader(title: category.name),
            Divider(height: 1, thickness: 1, color: Colors.grey.shade200),
            for (final item in category.items) ...[
              _PantryItemRow(name: item),
              Divider(height: 1, thickness: 1, color: Colors.grey.shade200),
            ],
          ],
        ],
      ),
    );
  }
}

class _CategoryHeader extends StatelessWidget {
  const _CategoryHeader({required this.title});

  final String title;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 16),
      child: Text(
        title,
        style: Theme.of(context).textTheme.titleMedium?.copyWith(
              fontWeight: FontWeight.w700,
            ),
      ),
    );
  }
}

class _PantryItemRow extends StatelessWidget {
  const _PantryItemRow({required this.name});

  final String name;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 14),
      child: Text(
        name,
        style: Theme.of(context).textTheme.bodyMedium,
      ),
    );
  }
}
