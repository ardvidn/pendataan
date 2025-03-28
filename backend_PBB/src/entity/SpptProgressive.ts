import { Column, Entity } from "typeorm";

@Entity("sppt_progressive", { schema: "public" })
export class SpptProgressive {
  @Column("character", { name: "nop", nullable: true, length: 18 })
  nop!: string | null;

  @Column("character", { name: "sppt_tahun", nullable: true, length: 4 })
  spptTahun!: string | null;

  @Column("bigint", { name: "pajak_pokok_1", nullable: true })
  pajakPokok_1!: string | null;

  @Column("bigint", { name: "pajak_pokok_2", nullable: true })
  pajakPokok_2!: string | null;

  @Column("numeric", { name: "tarif_pajak_1", nullable: true })
  tarifPajak_1!: string | null;

  @Column("numeric", { name: "tarif_pajak_2", nullable: true })
  tarifPajak_2!: string | null;

  @Column("bigint", { name: "njop_progressive_1", nullable: true })
  njopProgressive_1!: string | null;

  @Column("bigint", { name: "njop_progressive_2", nullable: true })
  njopProgressive_2!: string | null;

  @Column("smallint", { name: "siklus", nullable: true })
  siklus!: number | null;
}
