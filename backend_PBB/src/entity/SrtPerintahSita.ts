import { Column, Entity, Index } from "typeorm";

@Index("g15_1_ak", ["kdKantor", "kdKanwil", "noSpmp", "statusSegelSita"], {
  unique: true,
})
@Index("srt_perintah_sita_pkey", ["kdKantor", "kdKanwil", "noSpmp"], {
  unique: true,
})
@Entity("srt_perintah_sita", { schema: "public" })
export class SrtPerintahSita {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { primary: true, name: "no_spmp", length: 30 })
  noSpmp!: string;

  @Column("character", { name: "no_srt_paksa", length: 30 })
  noSrtPaksa!: string;

  @Column("timestamp without time zone", { name: "tgl_terbit_spmp" })
  tglTerbitSpmp!: Date;

  @Column("smallint", { name: "status_segel_sita", default: () => "0" })
  statusSegelSita!: number;

  @Column("character", { name: "nip_juru_sita", length: 18 })
  nipJuruSita!: string;

  @Column("timestamp without time zone", {
    name: "tgl_cetak_spmp",
    default: () => "statement_timestamp()",
  })
  tglCetakSpmp!: Date;

  @Column("character", { name: "nip_pencetak_spmp", length: 18 })
  nipPencetakSpmp!: string;
}
