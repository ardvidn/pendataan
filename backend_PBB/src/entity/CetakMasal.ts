import { Column, Entity, Index } from "typeorm";

@Index("cetak_masal_pkey", ["indeksCetakMasal", "kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "thnCetakMasal"], { unique: true })
@Index("e22_1_ak", ["indeksCetakMasal", "kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "nipPencetakMasal", "thnCetakMasal"], { unique: true })
@Index("e22_2_ak", ["indeksCetakMasal", "kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "tglCetakMasal", "thnCetakMasal"], { unique: true })
@Index("e22_e21_fk", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi"], {})
@Entity("cetak_masal", { schema: "public" })
export class CetakMasal {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "thn_cetak_masal", length: 4 })
  thnCetakMasal!: string;

  @Column("smallint", { primary: true, name: "indeks_cetak_masal" })
  indeksCetakMasal!: number;

  @Column("timestamp without time zone", {
    name: "tgl_cetak_masal",
    default: () => "statement_timestamp()",
  })
  tglCetakMasal!: Date;

  @Column("character", { name: "nip_pencetak_masal", length: 18 })
  nipPencetakMasal!: string;

  @Column("bigint", { name: "jml_sppt", nullable: true })
  jmlSppt!: string | null;

  @Column("bigint", { name: "jml_pbb_yg_harus_dibayar", nullable: true })
  jmlPbbYgHarusDibayar!: string | null;
}
