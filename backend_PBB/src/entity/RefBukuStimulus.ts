import { Column, Entity, Index } from "typeorm";

@Index("ref_buku_stimulus_pkey", ["kdDati2", "kdPropinsi", "thnPajak"], {
  unique: true,
})
@Entity("ref_buku_stimulus", { schema: "public" })
export class RefBukuStimulus {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_pajak", length: 4 })
  thnPajak!: string;

  @Column("character varying", { name: "buku", length: 5 })
  buku!: string;

  @Column("bigint", { name: "nilai_min" })
  nilaiMin!: string;

  @Column("bigint", { name: "nilai_max" })
  nilaiMax!: string;
}
